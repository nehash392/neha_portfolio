import React, { useEffect, useMemo, useRef, useState } from "react";
import rocketGif from "./rocket-6594_256.gif"; // <-- Import the GIF directly

/* ---------------- Icons ---------------- */
const Icons = {
  Code: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M16 18l6-6-6-6M8 6l-6 6 6 6"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Test: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Docker: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.184.184 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.186.186 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.184.184 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z" />
    </svg>
  ),
  Check: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <polyline
        points="20 6 9 17 4 12"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  Upload: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
    </svg>
  ),
};

/* ---------------- Component ---------------- */
const EnhancedCICDAnimation = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [buildProgress, setBuildProgress] = useState(0);
  const [tests, setTests] = useState({ unit: false, integration: false, security: false });
  const [allDone, setAllDone] = useState(false);
  const [rocketLaunched, setRocketLaunched] = useState(false);

  const timeline = useMemo(
    () => ({
      build: 2600,
      testGap: 600,
      package: 1800,
      deploy: 800,        // ⏩ faster deploy
      finishPause: 600,   // quick transition
    }),
    []
  );

  // Build progress
  const buildStartRef = useRef(null);
  useEffect(() => {
    if (stage !== 0) return;
    let rafId;
    const step = (ts) => {
      if (!buildStartRef.current) buildStartRef.current = ts;
      const elapsed = ts - buildStartRef.current;
      const pct = Math.min(100, Math.round((elapsed / timeline.build) * 100));
      setBuildProgress(pct);
      if (pct < 100) rafId = requestAnimationFrame(step);
      else setTimeout(() => setStage(1), 220);
    };
    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      buildStartRef.current = null;
    };
  }, [stage, timeline.build]);

  // Tests cascade
  useEffect(() => {
    if (stage !== 1) return;
    setTests({ unit: false, integration: false, security: false });
    const t1 = setTimeout(() => setTests((p) => ({ ...p, unit: true })), timeline.testGap);
    const t2 = setTimeout(() => setTests((p) => ({ ...p, integration: true })), timeline.testGap * 2);
    const t3 = setTimeout(() => setTests((p) => ({ ...p, security: true })), timeline.testGap * 3);
    const next = setTimeout(() => setStage(2), timeline.testGap * 3 + 450);
    return () => [t1, t2, t3, next].forEach(clearTimeout);
  }, [stage, timeline.testGap]);

  // Package -> Deploy
  useEffect(() => {
    if (stage !== 2) return;
    const id = setTimeout(() => setStage(3), timeline.package);
    return () => clearTimeout(id);
  }, [stage, timeline.package]);

  // Deploy -> Rocket Launch -> Done
  useEffect(() => {
    if (stage !== 3) return;

    // Launch rocket first
    const launch = setTimeout(() => setRocketLaunched(true), timeline.deploy);

    // Switch to "Deployment Successful!" after rocket has flown
    const finish = setTimeout(() => {
      setAllDone(true);
      onComplete && onComplete();
    }, timeline.deploy + timeline.finishPause);

    return () => {
      clearTimeout(launch);
      clearTimeout(finish);
    };
  }, [stage, onComplete, timeline.deploy, timeline.finishPause]);

  const stages = [
    { name: "Build", icon: <Icons.Code className="w-7 h-7 text-orange-400" />, status: "Compiling source code…" },
    { name: "Test", icon: <Icons.Test className="w-7 h-7 text-yellow-400" />, status: "Running test suite…" },
    { name: "Package", icon: <Icons.Docker className="w-8 h-8 text-blue-400" />, status: "Creating container image…" },
    { name: "Deploy", icon: null, status: "Deploying with rocket…" },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ fontFamily: "'Inter','Roboto','Poppins',sans-serif", backgroundColor: "rgb(13,18,30)", color: "white" }}
    >
      {!allDone ? (
        <div className="w-full max-w-6xl px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {stages.map((s, i) => {
              const isActive = stage === i;
              const isDone = stage > i;
              return (
                <div
                  key={s.name}
                  className={`rounded-lg p-6 transition-all duration-300 ${
                    isActive ? "scale-105" : isDone ? "opacity-90 -translate-y-1" : "opacity-60"
                  }`}
                  style={{ backgroundColor: "rgba(30,41,59,0.8)", boxShadow: isActive ? "0 10px 30px rgba(0,0,0,0.25)" : "none" }}
                >
                  {/* Icon circle */}
                  <div className="flex justify-center mb-4">
                    <div className="h-16 w-16 rounded-full flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: "rgb(30,41,59)" }}>
                      {isDone ? (
                        <Icons.Check className="w-8 h-8 text-emerald-500" />
                      ) : i === 3 ? (
                        <img
                          src={rocketGif}
                          alt="Deploying rocket"
                          className={`w-16 h-16 transition-transform duration-700 ${
                            rocketLaunched ? "-translate-y-[500px]" : ""
                          }`}
                        />
                      ) : (
                        s.icon
                      )}
                      {isActive && i !== 3 && (
                        <span className="absolute inset-0 rounded-full ring-2 ring-emerald-400/30 animate-pulse" />
                      )}
                    </div>
                  </div>

                  {/* Title + status */}
                  <h3 className="text-xl text-center font-medium mb-3">{s.name}</h3>
                  <p className="text-gray-400 mb-4 text-center text-sm">
                    {stage >= i ? s.status : "\u00A0"}
                  </p>

                  {/* Stage-specific body */}
                  {i === 0 && (
                    <>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{ width: `${buildProgress}%`, background: "linear-gradient(90deg, #f97316, #f59e0b)", transition: "width 90ms linear" }}
                        />
                      </div>
                      <p className="text-right text-xs text-gray-400 mt-1">{buildProgress}%</p>
                    </>
                  )}

                  {i === 1 && (
                    <div className="space-y-3">
                      {[
                        ["Unit tests", tests.unit],
                        ["Integration tests", tests.integration],
                        ["Security scan", tests.security],
                      ].map(([label, ok]) => (
                        <div key={label} className="flex justify-between items-center">
                          <span className="text-gray-300 text-sm">{label}</span>
                          <span className={`text-sm ${ok ? "text-emerald-400" : "text-gray-500"}`}>{ok ? "Passed" : "…"}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {i === 2 && (
                    <div className="flex justify-center my-4">
                      <div className={`w-16 h-16 rounded-full border-4 border-blue-500/50 flex items-center justify-center ${isActive ? "animate-[spin_2.4s_linear_infinite]" : ""}`}>
                        <Icons.Docker className="w-10 h-10 text-blue-400" />
                      </div>
                    </div>
                  )}

                  {i === 3 && (
                    <div className="flex flex-col items-center">
                      <p className="text-emerald-400 font-medium mt-3">
                        {rocketLaunched ? "Deployment complete!" : "Launching deployment…"}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gray-800 mb-6">
            <Icons.Check className="w-10 h-10 text-emerald-400" />
          </div>
          <h2 className="text-3xl font-medium mb-3">Deployment Successful!</h2>
          <p className="text-gray-400">Your Profile is now live.</p>
        </div>
      )}
    </div>
  );
};

export default EnhancedCICDAnimation;
