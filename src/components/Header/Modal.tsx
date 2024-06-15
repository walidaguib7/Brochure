"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

import { SubmitData } from "@/app/Actions";
import { Button } from "../ui/button";

import { useState } from "react";

const formSchema = z.object({
  email: z.string().email().trim(),
  message: z.string().trim(),
});

const Modal = () => {
  const [state, setState] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
    },
  });

  const Submit = async () => {
    const data = {
      email: form.getValues().email,
      message: form.getValues().message,
    };
    try {
      await SubmitData(data);
      setState((prev) => !prev);
      setTimeout(() => {
        setState((prev) => !prev);
      }, 3000);
      form.reset();
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[120px]">Get Started</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Let's Collaborate!</DialogTitle>
          <Form {...form}>
            <form className="space-y-8" action={Submit}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="write your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="write Something!" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div>
                <Button type="submit">Submit</Button>
                {state && (
                  <Alert className="mt-3">
                    <AlertTitle>Heads up!</AlertTitle>
                    <AlertDescription>
                      Message Sent Successfully!
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </form>
          </Form>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
