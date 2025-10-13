"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Submit = () => {
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [cooldown, setCooldown] = useState(0);

  useEffect(() => {
    const savedTime = localStorage.getItem("feedbackCooldown");
    if (savedTime) {
      const timeLeft = Math.floor((+savedTime - Date.now()) / 1000);
      if (timeLeft > 0) setCooldown(timeLeft);
    }
  }, []);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown((prev) => prev - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const submitFeedback = async () => {
    if (!message.trim() || cooldown > 0) return;

    setPending(true);
    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      if (res.ok) {
        alert("FeedBack Sent!");
        setMessage("");
        const nextAllowed = Date.now() + 5 * 60 * 1000; // 5 mins
        localStorage.setItem("feedbackCooldown", nextAllowed.toString());
        setCooldown(5 * 60);
      }
    } catch (err) {
      alert("Error");
      console.error(err);
    } finally {
      setPending(false);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <Input
        onChange={(e) => setMessage(e.target.value)}
        value={message}
        placeholder="Tell Me Your Experience"
        disabled={pending || cooldown > 0}
        className="bg-gray-900 border-gray-700 text-white"
      />

      <Button
        variant="default"
        onClick={submitFeedback}
        disabled={pending || !message.trim() || cooldown > 0}
      >
        {pending ? (
          <div className="w-5 h-5 animate-pulse">....</div>
        ) : cooldown > 0 ? (
          `Wait ${Math.floor(cooldown / 60)}:${cooldown % 60 < 10 ? "0" : ""}${
            cooldown % 60
          }`
        ) : (
          "Submit"
        )}
      </Button>
    </div>
  );
};

export default Submit;
