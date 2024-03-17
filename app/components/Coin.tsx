"use client";
import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from "react";

const Coin = () => {
  const [result, setResult] = useState<"TAILS" | "HEADS" | null>(null); // Initial result
  const [isFlipping, setIsFlipping] = useState(false); // Track flipping state

  const flipCoin = () => {
    setResult(null); // Clear result during flip
    setIsFlipping(true); // Trigger animation

    // Simulate coin flip with a slight delay
    setTimeout(() => {
      const coin = Math.floor(Math.random() * 2);
      setResult(coin ? "HEADS" : "TAILS");
      setIsFlipping(false); // End animation
    }, 1000); // Adjust delay as needed
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className={`coin ${isFlipping ? "animate-coin" : ""}`}>{result}</div>
      <Button id="flip-coin" variant={"default"} onClick={flipCoin}>
        FlipCoin
      </Button>
    </div>
  );
};

export default Coin;
