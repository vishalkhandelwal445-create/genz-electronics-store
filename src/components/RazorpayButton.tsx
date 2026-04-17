"use client";

import { useState } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export default function RazorpayButton({ amount, onSuccess }: { amount: number, onSuccess: () => void }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handlePayment = () => {
    setLoading(true);
    
    // Simulate Razorpay SDK Loading
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      onSuccess();
      
      // Reset success after 3 seconds
      setTimeout(() => setSuccess(false), 3000);
    }, 2000);
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading || success}
      className={`cyber-btn-fill w-full py-5 flex items-center justify-center gap-3 ${
        success ? "bg-neon-green border-neon-green text-black" : ""
      }`}
    >
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Initializing Secure Gateway...
        </>
      ) : success ? (
        <>
          <CheckCircle2 className="w-5 h-5" />
          Payment Successful
        </>
      ) : (
        <>
          Pay ₹{amount.toLocaleString("en-IN")}
        </>
      )}
    </button>
  );
}
