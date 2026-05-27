"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Code2,
  Cpu,
  Globe2,
  Layers3,
  LineChart,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Custom Business Systems",
    text: "Internal tools, operational systems, dashboards, portals, and workflow platforms built around real business processes.",
    examples: ["Stock systems", "Order tracking", "Admin portals"],
  },
  {
    icon: <MonitorSmartphone className="h-5 w-5" />,
    title: "Web & Mobile Apps",
    text: "Modern websites, mobile apps, client portals, booking systems, quoting tools, and digital platforms with premium UI/UX.",
    examples: ["Client apps", "Booking tools", "Mobile-first portals"],
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: "AI & Automation",
    text: "Smart assistants, document processing, repetitive task automation, API connections, approvals, and intelligent workflows.",
    examples: ["AI extraction", "Auto emails", "Workflow triggers"],
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Dashboards & Analytics",
    text: "Live business visibility with clean KPI screens, production tracking, stock movement, performance insights, and reports.",
    examples: ["KPI screens", "Live reports", "Production insights"],
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Process Optimization",
    text: "We look at how your business currently works, find the bottlenecks, and design software that makes the workflow smoother.",
    examples: ["Bottleneck tracking", "Worker flow", "Smart suggestions"],
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Digital Brand Experiences",
    text: "High-end online experiences that make your business feel modern, trustworthy, and capable before a client even contacts you.",
    examples: ["Premium websites", "Landing pages", "Brand systems"],
  },
];

const projects = [
  {
    type: "quote",
    tag: "Business App",
    title: "Quote & Invoice Builder",
    text: "A premium quoting system for generating professional quotes, invoices, PDFs, customer records, itemized services, discounts, and branded documents.",
    stats: ["PDF Output", "Local Storage", "Fast Admin"],

    problem:
      "Businesses waste time manually creating quotes and invoices across disconnected tools.",

    solution:
      "A fast all-in-one system that generates branded documents, calculates VAT automatically, and stores customer records instantly.",

    result:
      "Reduced admin workload, faster response times, and a more professional client experience.",
    
    impact: [
      ["+38%", "Faster Quotes"],
      ["-52%", "Manual Admin"],
      ["24/7", "Document Access"],
    ]
  },

  {
    type: "factory",
    tag: "Factory System",
    title: "Production Command Center",
    text: "A live operations dashboard for tracking workers, production counts, targets, order progress, and bottlenecks in one control-room view.",
    stats: ["Live KPIs", "Worker Output", "Process Tracking"],

    problem:
      "Factory managers often struggle to identify bottlenecks and worker inefficiencies in real time.",

    solution:
      "A live production optimization dashboard with worker assignment tracking and AI recommendations.",

    result:
      "Improved operational visibility, smarter worker allocation, and increased production efficiency.",

    impact: [
      ["+21%", "Efficiency"],
      ["-34%", "Idle Time"],
      ["+18%", "Output"],
    ]
  },

  {
    type: "ai",
    tag: "AI Automation",
    title: "Smart Workflow Engine",
    text: "An intelligent workflow system that connects data, automates repeated admin work, triggers notifications, and gives businesses AI-powered recommendations.",
    stats: ["AI Layer", "APIs", "Automations"],

    problem:
      "Teams spend hours repeating admin tasks, processing requests, and manually updating systems.",

    solution:
      "AI-powered workflows that read incoming data, automate actions, and synchronize business operations.",

    result:
      "Faster processing, reduced human error, and scalable automation across departments.",

    impact: [
      ["-68%", "Manual Tasks"],
      ["+92%", "Processing Speed"],
      ["24/7", "Automation"],
    ]
  },
];

const process = [
  { step: "01", title: "Discover", text: "We learn your business, workflow, pain points, users, and goals." },
  { step: "02", title: "Design", text: "We map the system, design the UI, plan the data, and define the build." },
  { step: "03", title: "Develop", text: "We build the app, website, automation, dashboard, or platform." },
  { step: "04", title: "Launch", text: "We test, refine, deploy, train users, and keep improving the system." },
];

function FloatingPanel({
  className,
  title,
  value,
  label,
  delay = 0,
}: {
  className: string;
  title: string;
  value: string;
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      className={`absolute rounded-2xl border border-lime-400/20 bg-black/60 p-4 shadow-2xl shadow-lime-500/10 backdrop-blur-xl ${className}`}
    >
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-lime-300/75">
        <span className="h-2 w-2 rounded-full bg-lime-400 shadow-[0_0_18px_#a3e635]" />
        {title}
      </div>
      <div className="mt-3 text-2xl font-semibold text-white">{value}</div>
      <div className="mt-1 text-xs text-zinc-400">{label}</div>
    </motion.div>
  );
}

function MiniAppDemo() {
  const [customer, setCustomer] = useState("Example Client");
  const [service, setService] = useState("Custom Business App");
  const [quantity, setQuantity] = useState(1);
  const [amount, setAmount] = useState(12000);
  const [discount, setDiscount] = useState(10);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const subtotal = quantity * amount;
  const discountAmount = subtotal * (discount / 100);
  const taxableAmount = subtotal - discountAmount;
  const vat = taxableAmount * 0.15;
  const total = taxableAmount + vat;

  function money(value: number) {
    return Math.round(value)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function generateQuote() {
    setIsGenerating(true);
    setGenerated(false);

    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 1400);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-black/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-lime-300">
            Live Quote App
          </div>
          <div className="mt-1 text-lg font-semibold text-white">
            Smart Quote Builder
          </div>
        </div>

        <div className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-black">
          Usable
        </div>
      </div>

      <div className="space-y-3">
        <label className="block">
          <span className="text-xs text-zinc-500">Customer</span>
          <input
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-lime-300/50"
            placeholder="Enter customer name"
          />
        </label>

        <label className="block">
          <span className="text-xs text-zinc-500">Service</span>
          <input
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-lime-300/50"
            placeholder="Enter service"
          />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label className="block">
            <span className="text-xs text-zinc-500">Qty</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-lime-300/50"
            />
          </label>

          <label className="block">
            <span className="text-xs text-zinc-500">Amount</span>
            <input
              type="number"
              min="0"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950 px-2 py-2 text-sm text-white outline-none focus:border-lime-300/50"
            />
          </label>

          <label className="block">
            <span className="text-xs text-zinc-500">Disc %</span>
            <input
              type="number"
              min="0"
              max="100"
              value={discount}
              onChange={(e) => setDiscount(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-lime-300/50"
            />
          </label>
        </div>

        <div className="rounded-xl border border-lime-400/20 bg-lime-400/10 p-3">
          <div className="flex justify-between text-xs text-zinc-400">
            <span>Subtotal</span>
            <span>R {money(subtotal)}</span>
          </div>

          <div className="mt-1 flex justify-between text-xs text-zinc-400">
            <span>Discount</span>
            <span>- R {money(discountAmount)}</span>
          </div>

          <div className="mt-1 flex justify-between text-xs text-zinc-400">
            <span>VAT 15%</span>
            <span>R {money(vat)}</span>
          </div>

          <div className="mt-3 flex justify-between border-t border-white/10 pt-3">
            <span className="text-xs text-lime-300">Total Incl. VAT</span>
            <span>R {money(Math.round(total))}</span>
          </div>
        </div>

        <button
          onClick={generateQuote}
          className="w-full rounded-xl bg-lime-300 px-4 py-3 text-sm font-semibold text-black transition hover:bg-white"
        >
          {isGenerating ? "Generating Quote..." : "Generate Quote PDF"}
        </button>

        {isGenerating && (
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.35 }}
              className="h-full rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.55)]"
            />
          </div>
        )}

        {generated && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className="rounded-xl border border-lime-400/30 bg-zinc-950 p-3"
          >
            <div className="mb-2 flex items-center justify-between border-b border-white/10 pb-2">
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-lime-300">
                  Quote Preview
                </div>
                <div className="text-sm font-semibold text-white">QT-2026-001</div>
              </div>
              <div className="flex h-10 w-20 items-center justify-center rounded-full bg-lime-300 text-center text-[10px] font-bold leading-tight text-black">
                <span>
                  PDF
                  <br />
                  READY
                </span>
              </div>
            </div>

            <div className="space-y-1 text-xs text-zinc-400">
              <div className="flex justify-between">
                <span>Customer</span>
                <span className="text-white">{customer || "New Customer"}</span>
              </div>
              <div className="flex justify-between">
                <span>Service</span>
                <span className="text-white">{service || "Custom Service"}</span>
              </div>
              <div className="flex justify-between">
                <span>Total</span>
                <span className="font-semibold text-lime-300">
                  R {money(Math.round(total))}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

function FactoryDashboardDemo() {
  const sections = ["Cutting", "Welding", "Assembly"] as const;
  type Section = typeof sections[number];

  const workers = [
    { name: "Liam", skills: { Cutting: 9, Welding: 4, Assembly: 6 } },
    { name: "Noah", skills: { Cutting: 6, Welding: 8, Assembly: 5 } },
    { name: "Ava", skills: { Cutting: 5, Welding: 9, Assembly: 6 } },
    { name: "Mia", skills: { Cutting: 7, Welding: 5, Assembly: 8 } },
    { name: "Leo", skills: { Cutting: 8, Welding: 6, Assembly: 5 } },
    { name: "Zoe", skills: { Cutting: 4, Welding: 6, Assembly: 9 } },
    { name: "Eli", skills: { Cutting: 7, Welding: 7, Assembly: 6 } },
    { name: "Kai", skills: { Cutting: 6, Welding: 5, Assembly: 8 } },
    { name: "Ruby", skills: { Cutting: 9, Welding: 5, Assembly: 4 } },
    { name: "Max", skills: { Cutting: 5, Welding: 8, Assembly: 7 } },
  ];

  const [view, setView] = useState<"factory" | "workers">("factory");

  const [assignments, setAssignments] = useState<Record<string, Section>>({
    Liam: "Cutting",
    Noah: "Welding",
    Ava: "Welding",
    Mia: "Assembly",
    Leo: "Cutting",
    Zoe: "Assembly",
    Eli: "Cutting",
    Kai: "Assembly",
    Ruby: "Cutting",
    Max: "Welding",
  });

  const [targets, setTargets] = useState<Record<Section, number>>({
    Cutting: 260,
    Welding: 220,
    Assembly: 240,
  });

  const sectionData = sections.map((section) => {
    const assignedWorkers = workers.filter(
      (worker) => assignments[worker.name] === section
    );

    const skillTotal = assignedWorkers.reduce(
      (sum, worker) => sum + worker.skills[section],
      0
    );

    const output = skillTotal * 8;
    const target = targets[section];
    const progress = Math.min(Math.round((output / target) * 100), 100);

    return {
      section,
      assignedWorkers,
      skillTotal,
      output,
      target,
      progress,
    };
  });

  const bottleneck = sectionData.reduce((lowest, current) =>
    current.progress < lowest.progress ? current : lowest
  );

  const bestAvailableWorker = workers
    .filter((worker) => assignments[worker.name] !== bottleneck.section)
    .sort(
      (a, b) =>
        b.skills[bottleneck.section] - a.skills[bottleneck.section]
    )[0];

  function updateAssignment(workerName: string, section: Section) {
    setAssignments((prev) => ({
      ...prev,
      [workerName]: section,
    }));
  }

  function updateTarget(section: Section, value: number) {
    setTargets((prev) => ({
      ...prev,
      [section]: value,
    }));
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-black/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-lime-300">
            Production System
          </div>
          <div className="mt-1 text-lg font-semibold text-white">
            Worker Optimization System
          </div>
        </div>

        <div className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-black">
          Live
        </div>
      </div>

      <div className="mb-4 grid grid-cols-2 gap-2 rounded-xl border border-white/10 bg-zinc-950 p-1">
        <button
          onClick={() => setView("factory")}
          className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
            view === "factory"
              ? "bg-lime-300 text-black"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Factory View
        </button>

        <button
          onClick={() => setView("workers")}
          className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
            view === "workers"
              ? "bg-lime-300 text-black"
              : "text-zinc-400 hover:text-white"
          }`}
        >
          Worker View
        </button>
      </div>

      {view === "factory" ? (
        <div className="space-y-3">
          {sectionData.map((item) => (
            <div
              key={item.section}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {item.section}
                  </div>

                  <div className="text-xs text-zinc-500">
                    {item.assignedWorkers.length} workers · output {item.output}/day
                  </div>
                </div>

                <div className="text-right">
                  <div className="mb-1 text-[10px] uppercase tracking-[0.15em] text-lime-300">
                    Daily Target
                  </div>

                  <input
                    type="number"
                    value={item.target}
                    onChange={(e) =>
                      updateTarget(item.section, Number(e.target.value))
                    }
                    className="w-24 rounded-lg border border-lime-300/20 bg-black px-2 py-1 text-center text-sm font-semibold text-white outline-none focus:border-lime-300/60"
                  />
                </div>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ width: `${item.progress}%` }}
                  transition={{ duration: 0.45 }}
                  className="h-full rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.55)]"
                />
              </div>

              <div className="mt-2 flex justify-between text-[10px] text-zinc-500">
                <span>Target: {item.target}/day</span>
                <span className="text-lime-300">{item.progress}%</span>
              </div>
            </div>
          ))}

          <motion.div
            key={bottleneck.section + bestAvailableWorker?.name}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl border border-lime-400/20 bg-lime-400/10 p-3"
          >
            <div className="text-xs uppercase tracking-[0.18em] text-lime-300">
              AI Recommendation
            </div>
            <div className="mt-1 text-sm text-white">
              Bottleneck detected in{" "}
              <span className="font-semibold text-lime-300">
                {bottleneck.section}
              </span>
              .
            </div>
            <div className="mt-1 text-xs text-zinc-400">
              Move {bestAvailableWorker?.name} to {bottleneck.section} for better
              skill alignment and improved production flow.
            </div>
          </motion.div>
        </div>
      ) : (
        <div className="max-h-[440px] space-y-2 overflow-y-auto pr-1">
          {workers.map((worker) => (
            <div
              key={worker.name}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
            >
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold text-white">
                    {worker.name}
                  </div>
                  <div className="text-xs text-zinc-500">
                    Assigned to {assignments[worker.name]}
                  </div>
                </div>

                <select
                  value={assignments[worker.name]}
                  onChange={(e) =>
                    updateAssignment(worker.name, e.target.value as Section)
                  }
                  className="rounded-lg border border-white/10 bg-black px-2 py-1 text-xs text-white outline-none focus:border-lime-300/50"
                >
                  {sections.map((section) => (
                    <option key={section}>{section}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-3 gap-2 text-[10px]">
                {sections.map((section) => (
                  <div
                    key={section}
                    className={`rounded-lg border p-2 ${
                      assignments[worker.name] === section
                        ? "border-lime-300/50 bg-lime-400/10"
                        : "border-white/10 bg-black/40"
                    }`}
                  >
                    <div className="text-zinc-500">{section}</div>
                    <div className="text-sm font-semibold text-white">
                      {worker.skills[section]}/10
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function AIWorkflowDemo() {
  const [workflow, setWorkflow] = useState("Quote Request");
  const [running, setRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(-1);
  const [completed, setCompleted] = useState(false);

  const workflowData: Record<
    string,
    {
      input: string;
      extracted: Record<string, string>;
      result: string;
    }
  > = {
    "Quote Request": {
      input: "Hi, I need a website and client portal for my business. Please send pricing.",
      extracted: {
        Client: "New Lead",
        Service: "Website + Portal",
        Priority: "High",
        Value: "R18,500",
      },
      result: "Quote QT-2026-104 created and email prepared.",
    },
    "Customer Order": {
      input: "Order received for 24 custom units. Customer needs delivery next week.",
      extracted: {
        Client: "Retail Customer",
        Service: "Custom Order",
        Priority: "Medium",
        Value: "R32,400",
      },
      result: "Order created, production task assigned, dashboard updated.",
    },
    "Support Ticket": {
      input: "The app is not syncing stock correctly after the last update.",
      extracted: {
        Client: "Support Client",
        Service: "Bug Report",
        Priority: "Urgent",
        Value: "Action Required",
      },
      result: "Ticket created, developer notified, priority escalated.",
    },
  };

  const steps = [
    "Read Incoming Data",
    "Extract Key Details",
    "Generate Action",
    "Send Notification",
    "Update Dashboard",
  ];

  const current = workflowData[workflow];

  function runWorkflow() {
    setRunning(true);
    setCompleted(false);
    setActiveStep(0);

    steps.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index);
      }, index * 650);
    });

    setTimeout(() => {
      setRunning(false);
      setCompleted(true);
    }, steps.length * 650 + 250);
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-black/80 p-4">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-[0.22em] text-lime-300">
            AI Automation System
          </div>
          <div className="mt-1 text-lg font-semibold text-white">
            Workflow Intelligence
          </div>
        </div>

        <div className="rounded-full bg-lime-300 px-3 py-1 text-xs font-semibold text-black">
          AI
        </div>
      </div>

      <label className="block">
        <span className="text-xs text-zinc-500">Workflow Type</span>
        <select
          value={workflow}
          onChange={(e) => {
            setWorkflow(e.target.value);
            setCompleted(false);
            setActiveStep(-1);
          }}
          className="mt-1 w-full rounded-xl border border-white/10 bg-zinc-950 px-3 py-2 text-sm text-white outline-none focus:border-lime-300/50"
        >
          <option>Quote Request</option>
          <option>Customer Order</option>
          <option>Support Ticket</option>
        </select>
      </label>

      <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
        <div className="mb-1 text-xs uppercase tracking-[0.18em] text-lime-300">
          Incoming Data
        </div>
        <div className="text-xs leading-5 text-zinc-400">
          “{current.input}”
        </div>
      </div>

      <div className="mt-3 grid grid-cols-5 gap-1">
        {steps.map((step, index) => {
          const isActive = running && activeStep === index;
          const isDone = completed || activeStep > index;

          return (
            <motion.div
              key={step}
              animate={{
                scale: isActive ? 1.08 : 1,
                opacity: activeStep === -1 && !completed ? 0.45 : 1,
              }}
              className={`h-2 rounded-full ${
                isActive
                  ? "bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.8)]"
                  : isDone
                  ? "bg-lime-500"
                  : "bg-white/15"
              }`}
            />
          );
        })}
      </div>

      <div className="mt-3 space-y-2">
        {steps.map((step, index) => {
          const isActive = running && activeStep === index;
          const isDone = completed || activeStep > index;

          return (
            <motion.div
              key={step}
              animate={{
                scale: isActive ? 1.02 : 1,
                opacity:
                  activeStep === -1 && !completed
                    ? 0.55
                    : activeStep < index && !completed
                    ? 0.45
                    : 1,
              }}
              className={`rounded-xl border p-2.5 transition ${
                isActive
                  ? "border-lime-300 bg-lime-400/10 shadow-[0_0_25px_rgba(163,230,53,0.18)]"
                  : isDone
                  ? "border-lime-400/30 bg-white/[0.04]"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs font-semibold text-white">{step}</div>
                  <div className="text-[10px] text-zinc-500">
                    {isActive ? "Processing..." : isDone ? "Completed" : "Waiting"}
                  </div>
                </div>

                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    isActive
                      ? "bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.8)]"
                      : isDone
                      ? "bg-lime-500"
                      : "bg-white/20"
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {(running || completed) && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 rounded-xl border border-lime-400/20 bg-lime-400/10 p-3"
        >
          <div className="text-xs uppercase tracking-[0.18em] text-lime-300">
            AI Extraction
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
            {Object.entries(current.extracted).map(([key, value]) => (
              <div key={key} className="rounded-lg bg-black/40 p-2">
                <div className="text-zinc-500">{key}</div>
                <div className="font-semibold text-white">{value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}

      <button
        onClick={runWorkflow}
        disabled={running}
        className="mt-3 w-full rounded-xl bg-lime-300 px-4 py-3 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {running ? "Automation Running..." : "Run AI Workflow"}
      </button>

      {completed && (
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="mt-3 rounded-xl border border-lime-400/30 bg-zinc-950 p-3"
        >
          <div className="mb-1 text-xs uppercase tracking-[0.18em] text-lime-300">
            Automation Complete
          </div>
          <div className="text-sm font-semibold text-white">
            {current.result}
          </div>
          <div className="mt-1 text-xs text-zinc-500">
            Notification sent · dashboard updated · task logged
          </div>
        </motion.div>
      )}
    </div>
  );
}

function HeroVisual() {
  const nodes = useMemo(() => Array.from({ length: 26 }, (_, i) => i), []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 40, scale: 0.96 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.15 }}
      className="relative mx-auto h-[420px] md:h-[520px] w-full max-w-[620px] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_50%_35%,rgba(132,204,22,0.28),rgba(0,0,0,0.35)_38%,rgba(0,0,0,0.96)_76%)] shadow-2xl shadow-lime-500/10"
    >
      <div className="absolute inset-0 bg-[linear-gradient(rgba(132,204,22,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(132,204,22,0.08)_1px,transparent_1px)] bg-[size:34px_34px] opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent,rgba(0,0,0,0.9)_80%)]" />

      {nodes.map((n) => (
        <motion.span
          key={n}
          animate={{ opacity: [0.15, 1, 0.15], scale: [0.7, 1.4, 0.7] }}
          transition={{ duration: 2.2 + (n % 6), repeat: Infinity, delay: n * 0.09 }}
          className="absolute h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_16px_#bef264]"
          style={{
            left: `${10 + ((n * 29) % 80)}%`,
            top: `${8 + ((n * 41) % 82)}%`,
          }}
        />
      ))}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-400/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 52, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-lime-400/10"
      />

      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-[38%] z-20 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[1.6rem] border border-lime-300/30 bg-black/80 shadow-[0_0_90px_rgba(132,204,22,0.4)] backdrop-blur md:top-1/2 md:h-56 md:w-56 md:rounded-[2rem]"
      >
        <img
          src="/images/cslgo-rb1.png"
          alt="Code Sartor"
          className="h-28 w-auto drop-shadow-[0_0_30px_rgba(163,230,53,0.55)] md:h-40"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.7 }}
        className="absolute bottom-6 left-6 right-6 z-30 rounded-3xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl"
      >
        <div className="mb-4 flex items-center justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-lime-300">Live Build Preview</div>
            <div className="mt-1 text-xl font-semibold text-white">Business System Interface</div>
          </div>
          <div className="rounded-full border border-lime-400/30 bg-lime-400/10 px-3 py-1 text-xs text-lime-300">
            Online
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 md:gap-3">
          {[
            ["Live Apps", "12"],
            ["Automations", "48"],
            ["AI", "Active"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-2.5 md:p-3">
              <div className="text-xs text-zinc-500">{label}</div>
              <div className="mt-1 text-base font-semibold text-white md:text-lg">
                {value}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-lime-300">{eyebrow}</div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-zinc-400 md:text-lg">{text}</p>
    </motion.div>
  );
}

export default function CodeSartorLandingPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [demoProject, setDemoProject] = useState<(typeof projects)[number] | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [loading, setLoading] = useState(true);

  const [activeSection, setActiveSection] = useState("portfolio");

  const navItems = [
    { id: "portfolio", label: "Portfolio" },
    { id: "services", label: "Capabilities" },
    { id: "about", label: "About" },
    { id: "showcase", label: "Why Us" },
    { id: "process", label: "Process" },
    { id: "contact", label: "Contact" },
  ];

  const [projectModalOpen, setProjectModalOpen] = useState(false);
  const [projectSubmitted, setProjectSubmitted] = useState(false);
  const [projectSubmitting, setProjectSubmitting] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    function handleScroll() {
      const sectionIds = navItems.map((item) => item.id);

      const current = sectionIds.findLast((id) => {
        const section = document.getElementById(id);
        if (!section) return false;

        return section.getBoundingClientRect().top <= 160;
      });

      if (current) {
        setActiveSection(current);
      }
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  async function handleProjectSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setProjectSubmitting(true);
    setProjectSubmitted(false);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      company: formData.get("company"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      projectType: formData.get("projectType"),
      budget: formData.get("budget"),
      description: formData.get("description"),
    };

    const response = await fetch("/api/start-project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    setProjectSubmitting(false);

    if (response.ok) {
      setProjectSubmitted(true);
      form.reset();
    } else {
      const errorData = await response.json();
      alert(errorData.error || "Something went wrong. Please try again.");
    }
  }

  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(132,204,22,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_24%),radial-gradient(circle_at_50%_80%,rgba(132,204,22,0.08),transparent_30%)]" />
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex flex-col items-center"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(163,230,53,0.25)",
                  "0 0 80px rgba(163,230,53,0.5)",
                  "0 0 20px rgba(163,230,53,0.25)",
                ],
              }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="mb-8 flex h-28 w-28 items-center justify-center rounded-[2rem] border border-lime-300/30 bg-black"
            >
              <img
                src="/images/cslgo-rb1.png"
                alt="Code Sartor"
                className="h-20 w-auto drop-shadow-[0_0_28px_rgba(163,230,53,0.65)]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-center"
            >
              <div className="text-sm font-bold uppercase tracking-[0.5em] text-white">
                Code Sartor
              </div>

              <div className="mt-3 text-xs uppercase tracking-[0.35em] text-lime-300">
                Initializing Systems
              </div>
            </motion.div>

            <div className="mt-8 h-1 w-64 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.1, ease: "easeInOut" }}
                className="h-full rounded-full bg-lime-300 shadow-[0_0_24px_rgba(163,230,53,0.8)]"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.6, 1] }}
              transition={{ delay: 0.7, duration: 1.4 }}
              className="mt-5 text-[10px] uppercase tracking-[0.28em] text-zinc-500"
            >
              AI • Apps • Automation • Systems
            </motion.div>
          </motion.div>
        </motion.div>
      )}
      
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[5] h-80 w-80 rounded-full bg-lime-300/10 blur-3xl"
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
          mass: 0.5,
        }}
      />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-black/55 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/cslgo-rb1.png"
              alt="Code Sartor"
              className="h-14 w-auto"
            />
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.28em]">Code Sartor</div>
              <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">Portfolio • Systems • AI</div>
            </div>
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 text-sm text-zinc-400 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative rounded-full px-4 py-2 transition ${
                  activeSection === item.id
                    ? "bg-lime-300 text-black shadow-[0_0_22px_rgba(163,230,53,0.28)]"
                    : "hover:bg-white/[0.05] hover:text-lime-300"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setProjectModalOpen(true);
              setProjectSubmitted(false);
            }}
            className="rounded-full border border-lime-400/30 bg-lime-400/10 px-5 py-2 text-sm font-medium text-lime-200 transition hover:bg-lime-400/20 hover:shadow-[0_0_30px_rgba(163,230,53,0.22)]"
          >
            Start Project
          </button>
        </nav>
      </header>

      <section className="scroll-mt-32 relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-400/20 bg-lime-400/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-lime-200">
            <Rocket className="h-4 w-4" /> Premium software systems for modern businesses
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.96] tracking-tight md:text-7xl lg:text-8xl">
            Custom Software.
            <br />
            AI Automation.
            <br />
            Built for Business.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Code Sartor develops business apps, dashboards, automation systems,
            AI tools, and premium websites for companies that want to modernize
            operations and scale smarter.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#portfolio" className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-7 py-4 font-semibold text-black transition hover:bg-white">
              View Portfolio <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-lime-300/50 hover:bg-lime-400/10">
              Our Capabilities
            </a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
  {[
    ["Web Systems", "Online", "Client-ready websites"],
    ["Business Apps", "Active", "Dashboards & portals"],
    ["AI Workflows", "Running", "Automation engines"],
  ].map(([title, status, detail]) => (
    <motion.div
      key={title}
      whileHover={{ y: -4, scale: 1.02 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-4 backdrop-blur"
    >
      <div className="absolute right-3 top-3 flex items-center gap-1.5">
                <motion.span
                  animate={{
                    opacity: [0.4, 1, 0.4],
                    scale: [0.9, 1.2, 0.9],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_12px_rgba(163,230,53,0.9)]"
                />
                <span className="text-[10px] uppercase tracking-[0.18em] text-lime-300">
                  Live
                </span>
              </div>

              <div className="text-sm font-semibold text-white">{title}</div>

              <div className="mt-3 text-2xl font-semibold text-lime-300">
                {status}
              </div>

              <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                {detail}
              </div>
            </motion.div>
          ))}
        </div>
        </motion.div>
        <HeroVisual />
      </section>

      <section id="portfolio" className="scroll-mt-32 relative z-10 mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Portfolio showcase"
          title="Modern systems built for modern businesses."
          text="Code Sartor creates premium digital experiences, intelligent workflows, and scalable software systems that help businesses operate faster, smarter, and more efficiently."
        />
        <div className="mt-14 grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{
                opacity: 0,
                y: 30,
                filter: "blur(10px)",
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="group overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-lime-300/35 hover:shadow-2xl hover:shadow-lime-500/10"
            >
              <div className="relative mb-5 overflow-hidden rounded-[1.4rem] border border-white/10 bg-black p-4">
                {project.type === "quote" ? (
                    <MiniAppDemo />
                  ) : project.type === "factory" ? (
                    <FactoryDashboardDemo />
                  ) : project.type === "ai" ? (
                    <AIWorkflowDemo />
                  ) : (
                  <div className="relative h-52 rounded-2xl border border-lime-400/20 bg-zinc-950/80 p-4">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="h-3 w-28 rounded-full bg-lime-300/70" />
                      <div className="h-8 w-8 rounded-xl bg-white/10" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                      <div className="h-16 rounded-xl bg-white/10" />
                      <div className="h-16 rounded-xl bg-lime-300/20" />
                      <div className="h-16 rounded-xl bg-white/10" />
                    </div>

                    <div className="mt-3 space-y-2">
                      <div className="h-2 w-full rounded-full bg-white/10" />
                      <div className="h-2 w-4/5 rounded-full bg-lime-300/30" />
                      <div className="h-2 w-2/3 rounded-full bg-white/10" />
                    </div>
                  </div>
                )}
              </div>
              <div className="text-xs font-semibold uppercase tracking-[0.26em] text-lime-300">{project.tag}</div>
              <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>
              <p className="mt-3 leading-7 text-zinc-400">{project.text}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stats.map((stat) => (
                  <span key={stat} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                    {stat}
                  </span>
                ))}
              </div>
              <div className="mt-6 space-y-4">
  <div className="rounded-xl border border-white/10 bg-black/30 p-4">
    <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
      Problem
    </div>

    <div className="mt-2 text-sm leading-6 text-zinc-300">
      {project.problem}
    </div>
  </div>

  <div className="rounded-xl border border-lime-400/20 bg-lime-400/10 p-4">
    <div className="text-[10px] uppercase tracking-[0.18em] text-lime-300">
      Solution
    </div>

    <div className="mt-2 text-sm leading-6 text-white">
      {project.solution}
    </div>
  </div>

  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
    <div className="text-[10px] uppercase tracking-[0.18em] text-zinc-500">
      Result
    </div>

    <div className="mt-2 text-sm leading-6 text-zinc-300">
      {project.result}
    </div>
  </div>

  <div className="flex gap-3 pt-1">
    <button
      onClick={() => setDemoProject(project)}
      className="flex-1 rounded-xl bg-lime-300 px-4 py-3 text-sm font-semibold text-black transition hover:bg-white"
    >
      View System
    </button>

    <button
      onClick={() => setSelectedProject(project)}
      className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white transition hover:border-lime-300/40 hover:bg-lime-400/10"
    >
      Case Study
    </button>
  </div>
</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className=" scroll-mt-32 relative z-10 mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Capabilities"
          title="Built to streamline operations and scale businesses."
          text="Code Sartor creates intelligent digital systems that combine modern design, automation, and powerful functionality to help businesses operate smarter and grow faster."
        />
        <div className="mt-14 grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
            key={service.title}
            initial={{
              opacity: 0,
              y: 28,
              filter: "blur(10px)",
            }}

            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.06 }}
            className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-lime-300/35 hover:bg-lime-400/[0.06] hover:shadow-2xl hover:shadow-lime-500/10"
          >
            <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-300/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-lime-300 transition group-hover:scale-110 group-hover:bg-lime-300 group-hover:text-black">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-white">{service.title}</h3>

              <p className="mt-3 leading-7 text-zinc-400">{service.text}</p>

              <div className="mt-5 space-y-2">
                <div className="text-[10px] uppercase tracking-[0.2em] text-lime-300">
                  Examples
                </div>

                {service.examples.map((example) => (
                  <div
                    key={example}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-zinc-300"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-lime-300 shadow-[0_0_10px_rgba(163,230,53,0.8)]" />
                    {example}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          ))}
        </div>
      </section>

      <section id="about" className="scroll-mt-32 relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75 }}
        >
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-lime-300">
            About Code Sartor
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Built for businesses that want more than just a website.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Code Sartor is a modern software studio focused on building premium digital systems for real business problems. We create websites, apps, dashboards, automations, and AI-powered workflows that help companies operate faster, look sharper, and scale smarter.
          </p>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Our focus is not only on design or code. It is on understanding how a business works, finding the friction, and turning that workflow into a clean, powerful system.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-lime-500/10 backdrop-blur"
        >
          <div className="grid gap-4">
          {[
            ["Mission", "Turn complex business workflows into simple, powerful digital tools."],
            ["Approach", "Start with the business process first, then design the software around it."],
            ["Focus", "Premium UI, automation, AI, dashboards, apps, and scalable systems."],
          ].map(([title, text], index) => (
            <motion.div
              key={title}
              initial={{
                opacity: 0,
                y: 24,
                filter: "blur(10px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-5 transition hover:border-lime-300/30 hover:bg-lime-400/[0.05]"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-lime-300/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-300">
                  {title}
                </div>

                <div className="mt-3 leading-7 text-zinc-300">
                  {text}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>

      <section id="showcase" className="scroll-mt-32 relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-28">
          <div className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-lime-300">
            Why Code Sartor
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Software that looks Premium. Systems that perform.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Code Sartor combines premium UI, business logic, automation, AI, and real workflow thinking to create software that feels powerful and actually improves how a business operates.
          </p>
        </div>

        <div className="grid gap-5">
          {[
            {
              number: "01",
              title: "Real Business Logic",
              text: "We build around how the business actually works — quotes, stock, orders, workers, approvals, dashboards, and daily operations.",
            },
            {
              number: "02",
              title: "Premium UI/UX",
              text: "The software should not only function well. It should feel modern, clean, fast, and easy enough for real teams to use every day.",
            },
            {
              number: "03",
              title: "Automation First",
              text: "Repetitive admin, document generation, emails, approvals, API calls, and reporting can be automated into smooth digital workflows.",
            },
            {
              number: "04",
              title: "Built Around Growth",
              text: "We design systems that can start simple, then grow into larger platforms as the business expands and needs more power.",
            },
          ].map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 28,
                filter: "blur(10px)",
              }}

              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              whileHover={{
                y: -6,
                rotateX: 2,
                rotateY: index % 2 === 0 ? 2 : -2,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-lime-300/35 hover:bg-lime-400/[0.06] hover:shadow-2xl hover:shadow-lime-500/10"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-300/10 blur-3xl opacity-0 transition group-hover:opacity-100" />
              <motion.div
                className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(163,230,53,0.08), transparent 70%)",
                }}
              />

              <div className="relative flex gap-5">
                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: 6,
                  }}
                  transition={{ type: "spring", stiffness: 260 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-sm font-bold text-lime-300 transition group-hover:bg-lime-300 group-hover:text-black"
                >
                  {item.number}
                </motion.div>

                <div>
                  <motion.h3
                    whileHover={{
                      textShadow: "0px 0px 18px rgba(163,230,53,0.45)",
                    }}
                    className="text-xl font-semibold text-white"
                  >
                    {item.title}
                  </motion.h3>
                  <p className="mt-3 leading-7 text-zinc-400">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      <section id="process" className="scroll-mt-32 relative z-10 mx-auto max-w-7xl px-6 py-24">
        <SectionTitle
          eyebrow="Process"
          title="From idea to launch, every system is built with structure."
          text="We guide each project through discovery, planning, development, testing, and launch so the final product is clear, reliable, and ready for real business use."
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-4">
        {process.map((item, index) => (
          <motion.div
            key={item.step}
            initial={{
              opacity: 0,
              y: 35,
              filter: "blur(12px)",
            }}

            whileInView={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            whileHover={{ y: -8, scale: 1.02 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            className="group relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur transition hover:border-lime-300/35 hover:bg-lime-400/[0.06] hover:shadow-2xl hover:shadow-lime-500/10"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-lime-300/10 blur-3xl opacity-0 transition group-hover:opacity-100" />

            <div className="relative">
              <div className="mb-10 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lime-400/20 bg-lime-400/10 text-sm font-bold text-lime-300 transition group-hover:bg-lime-300 group-hover:text-black">
                  {item.step}
                </div>

                <div className="h-px flex-1 bg-gradient-to-r from-lime-300/40 to-transparent ml-4 opacity-40" />
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      </section>

      <section id="contact" className="scroll-mt-32 relative z-10 mx-auto max-w-5xl px-6 py-28">
        <div className="overflow-hidden rounded-[2rem] border border-lime-400/20 bg-[radial-gradient(circle_at_50%_0%,rgba(132,204,22,0.2),rgba(0,0,0,0.86)_45%)] p-8 text-center shadow-2xl shadow-lime-500/10 md:p-14">
          <Layers3 className="mx-auto mb-6 h-10 w-10 text-lime-300" />
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Need a system, app, website, or automation?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Tell Code Sartor what you want to build, improve, automate, or modernize. We will help turn it into a sharp digital product.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <button
              onClick={() => {
                setProjectModalOpen(true);
                setProjectSubmitted(false);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-7 py-4 font-semibold text-black transition hover:bg-white"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </button>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 font-semibold text-white transition hover:border-lime-300/50 hover:bg-lime-400/10">
              View Portfolio
            </a>
          </div>
        </div>
      </section>
      {selectedProject && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-xl"
      >
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-lime-400/20 bg-zinc-950 p-6 shadow-2xl shadow-lime-500/10 md:p-8"
        >
          <button
            onClick={() => setSelectedProject(null)}
            className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:border-lime-300/40 hover:bg-lime-400/10"
          >
            Close
          </button>

          <div className="pr-24">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">
              {selectedProject.tag}
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
              {selectedProject.title}
            </h2>

            <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
              {selectedProject.text}
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Problem
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {selectedProject.problem}
              </p>
            </div>

            <div className="rounded-2xl border border-lime-400/20 bg-lime-400/10 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-lime-300">
                Solution
              </div>
              <p className="mt-3 text-sm leading-6 text-white">
                {selectedProject.solution}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Result
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                {selectedProject.result}
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-lime-300">
                Core Features
              </div>

              <div className="mt-4 grid gap-2">
                {selectedProject.stats.map((stat) => (
                <div
                  key={stat}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white"
                >
                  {stat}
                </div>
              ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
              <div className="text-xs uppercase tracking-[0.2em] text-lime-300">
                Example Impact
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
              {selectedProject.impact.map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3"
                >
                  <div className="text-xl font-semibold text-lime-300">
                    {value}
                  </div>

                  <div className="mt-1 text-[10px] text-zinc-500">
                    {label}
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    )}
    {demoProject && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 px-4 backdrop-blur-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-lime-400/20 bg-zinc-950 p-6 shadow-2xl shadow-lime-500/10 md:p-8"
      >
        <button
          onClick={() => setDemoProject(null)}
          className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:border-lime-300/40 hover:bg-lime-400/10"
        >
          Close
        </button>

        <div className="pr-24">
          <div className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">
            Live Demo
          </div>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            {demoProject.title}
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
            Interact with a larger version of the demo system.
          </p>
        </div>

        <div className="mt-8 rounded-[1.7rem] border border-white/10 bg-black/60 p-5">
          {demoProject.type === "quote" ? (
            <MiniAppDemo />
          ) : demoProject.type === "factory" ? (
            <FactoryDashboardDemo />
          ) : demoProject.type === "ai" ? (
            <AIWorkflowDemo />
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  )}

  {projectModalOpen && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 px-4 backdrop-blur-xl"
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-lime-400/20 bg-zinc-950 p-6 shadow-2xl shadow-lime-500/10 md:p-8"
      >
        <button
          onClick={() => setProjectModalOpen(false)}
          className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-white transition hover:border-lime-300/40 hover:bg-lime-400/10"
        >
          Close
        </button>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="pr-6">
            <button
              onClick={() => {
                setProjectModalOpen(true);
                setProjectSubmitted(false);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-300 px-7 py-4 font-semibold text-black transition hover:bg-white"
            >
              Start a Project <ArrowRight className="h-4 w-4" />
            </button>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              Let’s build something powerful.
            </h2>

            <p className="mt-5 leading-7 text-zinc-400">
              Tell Code Sartor what you want to build, improve, automate, or modernize.
              Whether it is a website, business system, app, dashboard, or AI workflow,
              this is where the idea starts.
            </p>

            <div className="mt-8 grid gap-3">
              {["Websites", "Business Apps", "AI Automation", "Dashboards"].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-zinc-300"
                >
                  <span className="mr-2 text-lime-300">●</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleProjectSubmit} className="rounded-[1.5rem] border border-white/10 bg-black/50 p-5">
            <div className="grid gap-4">
              <input
                name="name"
                required
                placeholder="Your name"
                className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-lime-300/50"
              />

              <input
                name="company"
                placeholder="Company name"
                className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-lime-300/50"
              />

              <input
                name="email"
                required
                type="email"
                placeholder="Email address"
                className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-lime-300/50"
              />

              <input
                name="phone"
                required
                type="tel"
                placeholder="Phone number"
                className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-lime-300/50"
              />

              <select
                name="projectType"
                required
                className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-lime-300/50"
              >
                <option value="">Project Type</option>
                <option value="Website">Website</option>
                <option value="Business App">Business App</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Dashboard / Analytics">Dashboard / Analytics</option>
                <option value="Full System">Full System</option>
              </select>

              <select
                name="budget"
                required
                className="rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-lime-300/50"
              >
                <option value="">Budget Range</option>
                <option value="R5,000 - R15,000">R5,000 - R15,000</option>
                <option value="R15,000 - R30,000">R15,000 - R30,000</option>
                <option value="R30,000 - R60,000">R30,000 - R60,000</option>
                <option value="R60,000+">R60,000+</option>
              </select>

              <textarea
                name="description"
                required
                rows={5}
                placeholder="Tell us what you want to build..."
                className="resize-none rounded-xl border border-white/10 bg-zinc-950 px-4 py-3 text-sm text-white outline-none focus:border-lime-300/50"
              />

              <button
                type="submit"
                disabled={projectSubmitting}
                className="rounded-xl bg-lime-300 px-5 py-4 font-semibold text-black transition hover:bg-white disabled:opacity-60"
              >
                {projectSubmitting ? "Initializing Project..." : "Initialize Project"}
              </button>

              {projectSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className="rounded-xl border border-lime-400/30 bg-lime-400/10 p-4"
              >
                <div className="text-sm font-semibold text-lime-300">
                  Information sent successfully
                </div>

                <div className="mt-1 text-xs text-zinc-400">
                  Your project request has been sent to Code Sartor.
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setProjectModalOpen(false);
                    setProjectSubmitted(false);
                  }}
                  className="mt-4 w-full rounded-xl bg-lime-300 px-4 py-3 text-sm font-semibold text-black transition hover:bg-white"
                >
                  Back to Home
                </button>
              </motion.div>
            )}
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  )}

    <footer className="relative z-10 border-t border-white/10 bg-black/60 backdrop-blur-xl">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
      
      <div>
        <div className="flex items-center gap-3">
          <img
            src="/images/cslgo-rb1.png"
            alt="Code Sartor"
            className="h-14 w-auto"
          />

          <div>
            <div className="text-sm font-bold uppercase tracking-[0.28em] text-white">
              Code Sartor
            </div>

            <div className="text-[10px] uppercase tracking-[0.24em] text-zinc-500">
              AI • Apps • Automation
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-md leading-7 text-zinc-400">
          Code Sartor builds premium digital systems, websites, dashboards,
          AI workflows, and business tools designed to modernize and optimize
          real-world operations.
        </p>

        <div className="mt-6 flex gap-3">
          {["Premium UI", "Business Systems", "AI Automation"].map((tag) => (
            <div
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">
          Navigation
        </div>

        <div className="mt-5 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-sm text-zinc-400 transition hover:text-lime-300"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-lime-300">
          Contact
        </div>

        <div className="mt-5 space-y-3 text-sm text-zinc-400">
          <div>codesartor@gmail.com</div>
          <div>060 352 9079</div>
          <div>South Africa</div>

          <button
            onClick={() => {
              setProjectModalOpen(true);
              setProjectSubmitted(false);
            }}
            className="mt-4 rounded-full border border-lime-400/30 bg-lime-400/10 px-5 py-3 font-medium text-lime-200 transition hover:bg-lime-400/20 hover:shadow-[0_0_30px_rgba(163,230,53,0.22)]"
          >
            Start Project
          </button>
        </div>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-zinc-500 md:flex-row">
        <div>
          © 2026 Code Sartor. Built for modern businesses.
        </div>

        <div className="flex items-center gap-2 text-lime-300">
          <motion.div
            animate={{
              opacity: [0.35, 1, 0.35],
              scale: [0.9, 1.25, 0.9],
              boxShadow: [
                "0 0 8px rgba(163,230,53,0.4)",
                "0 0 22px rgba(163,230,53,0.9)",
                "0 0 8px rgba(163,230,53,0.4)",
              ],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-2 w-2 rounded-full bg-lime-300"
          />

          <motion.span
            animate={{
              opacity: [0.75, 1, 0.75],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Systems Online
          </motion.span>
        </div>
      </div>
    </div>
  </footer>
    </main>
  );
}
