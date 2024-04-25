"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import type { LottieComponentProps, LottieRefCurrentProps } from "lottie-react";

type LottieDelayPlayProps = {
  delayMs: number;
  loading?: React.ReactNode;
} & LottieComponentProps;

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const LottieDelayPlay: React.FC<LottieDelayPlayProps> = ({
  delayMs,
  loading,
  ...lottieProps
}) => {
  const [isLoading, setIsLoading] = useState(!!loading);

  const ref = useRef<LottieRefCurrentProps>(null);
  const firstTime = useRef(Date.now());

  const timer = useRef<number | null>(null);
  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  const handleDomLoaded = useCallback(() => {
    setIsLoading(false);

    const elapsedTime = Date.now() - firstTime.current;

    // 加载完之后，如果已经超过了 delayMs，直接播放
    if (elapsedTime >= delayMs) {
      ref.current?.play();
      return;
    }

    // 如果没有超过 delayMs，等待剩余时间后播放
    timer.current = window.setTimeout(() => {
      ref.current?.play();
    }, delayMs - elapsedTime);
  }, [delayMs]);

  return (
    <div className="relative">
      {isLoading && <div className="absolute inset-0">{loading}</div>}
      <Lottie
        {...lottieProps}
        autoplay={false}
        lottieRef={ref}
        onDOMLoaded={handleDomLoaded}
      />
    </div>
  );
};

export default LottieDelayPlay;
