"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface CounselingFormData {
  fullName: string;
  address: string;
  email: string;
  confirmEmail: string;
  contactPhone: string;
  consultationSession: string;
  age: string;
  sessionSetting: string;
  howDidYouKnow: string;
  appointmentDate: string;
  preferredDetails: string;
}

interface CounselingFormProps {
  onSubmit?: (data: CounselingFormData) => void | Promise<void>;
  className?: string;
}

const CounselingForm = ({ onSubmit, className = "" }: CounselingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<CounselingFormData>({
    defaultValues: {
      fullName: "",
      address: "",
      email: "",
      confirmEmail: "",
      contactPhone: "",
      consultationSession: "",
      age: "",
      sessionSetting: "",
      howDidYouKnow: "",
      appointmentDate: "",
      preferredDetails: "",
    },
  });





  const handleSubmit = async (data: CounselingFormData) => {
  if (data.email !== data.confirmEmail) {
    form.setError("confirmEmail", {
      type: "manual",
      message: "Emails do not match",
    });
    return;
  }

  setIsSubmitting(true);

  try {
    const res = await fetch("/api/application-form", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const result = await res.json();
      throw new Error(result.error || "Failed to send email");
    }

    setIsSuccess(true);
    form.reset();

    setTimeout(() => setIsSuccess(false), 5000);
  } catch (error) {
    console.error("Form submission error:", error);
    form.setError("fullName", {
      type: "manual",
      message:
        "Failed to submit form. Please try again or contact info@kampressgps.com",
    });
  } finally {
    setIsSubmitting(false);
  }
};


  // const handleSubmit = async (data: CounselingFormData) => {
  //   // Validate email match
  //   if (data.email !== data.confirmEmail) {
  //     form.setError("confirmEmail", {
  //       type: "manual",
  //       message: "Emails do not match",
  //     });
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   try {
  //     // Call custom onSubmit if provided
  //     if (onSubmit) {
  //       await onSubmit(data);
  //     } else {
  //       // Default: Log to console (replace with API call later)
  //       console.log("Form Data:", data);

  //       // Simulate API call
  //       await new Promise((resolve) => setTimeout(resolve, 2000));
  //     }

  //     setIsSuccess(true);
  //     form.reset();

  //     // Reset success message after 5 seconds
  //     setTimeout(() => setIsSuccess(false), 5000);
  //   } catch (error) {
  //     console.error("Form submission error:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  return (
    <div className={`w-full ${className}`}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Full Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <FormField
              control={form.control}
              name="fullName"
              rules={{ required: "Full name is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Full name <span className="text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="First, middle and last name"
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 text-base"
                    />
                  </FormControl>
                  <p className="text-xs text-white/70">First, middle and last name</p>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <FormField
              control={form.control}
              name="address"
              rules={{ required: "Address is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Address <span className="text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Your full address"
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 text-base"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Email Fields */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Email <span className="text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 text-base"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="confirmEmail"
              rules={{ required: "Please confirm your email" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Confirm Email <span className="text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      placeholder="Confirm your email"
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 text-base"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Contact Phone */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <FormField
              control={form.control}
              name="contactPhone"
              rules={{ required: "Contact phone is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Contact Phone <span className="text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="tel"
                      placeholder="+234 XXX XXX XXXX"
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 text-base"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Consultation Session */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <FormField
              control={form.control}
              name="consultationSession"
              rules={{ required: "Please select a consultation session" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Consultation Session <span className="text-red-400">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 text-base">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="career">Career Counseling</SelectItem>
                      <SelectItem value="visa">Visa Counseling</SelectItem>
                      <SelectItem value="both">Both</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Age */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <FormField
              control={form.control}
              name="age"
              rules={{ required: "Please select your age range" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Age <span className="text-red-400">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 text-base">
                        <SelectValue placeholder="Less than 18" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="under18">Less than 18</SelectItem>
                      <SelectItem value="18-24">18 - 24</SelectItem>
                      <SelectItem value="25-34">25 - 34</SelectItem>
                      <SelectItem value="35-44">35 - 44</SelectItem>
                      <SelectItem value="45+">45 and above</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Session Setting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <FormField
              control={form.control}
              name="sessionSetting"
              rules={{ required: "Please select a session setting" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Session setting <span className="text-red-400">*</span>
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 text-base">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="online">Online (Video Call)</SelectItem>
                      <SelectItem value="office-abuja">In-Person (Abuja Office)</SelectItem>
                      <SelectItem value="office-asaba">In-Person (Asaba Office)</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* How did you know about us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <FormField
              control={form.control}
              name="howDidYouKnow"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    How did you know about us
                  </FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 text-base">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="google">Google Search</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="event">Event/Exhibition</SelectItem>
                      <SelectItem value="advertisement">Advertisement</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Appointment Date */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <FormField
              control={form.control}
              name="appointmentDate"
              rules={{ required: "Please select an appointment date" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Appointment date <span className="text-red-400">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="date"
                      className="bg-white border-gray-300 text-gray-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 h-12 text-base [color-scheme:light]"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Preferred Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.0 }}
          >
            <FormField
              control={form.control}
              name="preferredDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-semibold text-base">
                    Preferred Country, Preferred College or University, Remarks...
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Tell us about your preferences, questions, or any additional information..."
                      className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 min-h-[120px] resize-none text-base p-3"
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1 }}
            className="pt-4"
          >
            <Button
              type="submit"
              disabled={isSubmitting || isSuccess}
              size="lg"
              className="w-full sm:w-auto rounded-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 hover:from-orange-600 hover:via-orange-700 hover:to-orange-800 text-white px-10 py-6 text-base font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Submitting...
                </>
              ) : isSuccess ? (
                <>
                  <CheckCircle2 className="mr-2 h-5 w-5" />
                  Submitted Successfully!
                </>
              ) : (
                <>
                  Submit
                  <Send className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </motion.div>

          {/* Success Message */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
            >
              <p className="text-green-400 font-medium text-center">
                Thank you! We'll get back to you soon.
              </p>
            </motion.div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default CounselingForm;
