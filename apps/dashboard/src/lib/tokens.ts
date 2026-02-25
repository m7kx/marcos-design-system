// @/lib/tokens — token data module for the dashboard
// Mirrors packages/tokens output. Updated manually when tokens change.
// Do NOT import from @marcos-ds/tokens to avoid circular/build deps at this stage.

// ─── COLORS ────────────────────────────────────────────────────────────────

export const colorTokens = {
  brand: {
    label: "Brand Gold",
    tokens: [
      { name: "gold.50",  cssVar: "--mds-color-gold-50",  hex: "#fdf8ee" },
      { name: "gold.100", cssVar: "--mds-color-gold-100", hex: "#f9eccf" },
      { name: "gold.200", cssVar: "--mds-color-gold-200", hex: "#f3d89e" },
      { name: "gold.300", cssVar: "--mds-color-gold-300", hex: "#ebbc62" },
      { name: "gold.400", cssVar: "--mds-color-gold-400", hex: "#e3a02e" },
      { name: "gold.500", cssVar: "--mds-color-gold-500", hex: "#c98a1a" },
      { name: "gold.600", cssVar: "--mds-color-gold-600", hex: "#a86e14" },
      { name: "gold.700", cssVar: "--mds-color-gold-700", hex: "#875512" },
      { name: "gold.800", cssVar: "--mds-color-gold-800", hex: "#6a4114" },
      { name: "gold.900", cssVar: "--mds-color-gold-900", hex: "#573614" },
    ],
  },
  neutral: {
    label: "Neutral",
    tokens: [
      { name: "neutral.0",   cssVar: "--mds-color-neutral-0",   hex: "#ffffff" },
      { name: "neutral.50",  cssVar: "--mds-color-neutral-50",  hex: "#f8f8f8" },
      { name: "neutral.100", cssVar: "--mds-color-neutral-100", hex: "#f0f0f0" },
      { name: "neutral.200", cssVar: "--mds-color-neutral-200", hex: "#e0e0e0" },
      { name: "neutral.300", cssVar: "--mds-color-neutral-300", hex: "#c4c4c4" },
      { name: "neutral.400", cssVar: "--mds-color-neutral-400", hex: "#9a9a9a" },
      { name: "neutral.500", cssVar: "--mds-color-neutral-500", hex: "#727272" },
      { name: "neutral.600", cssVar: "--mds-color-neutral-600", hex: "#545454" },
      { name: "neutral.700", cssVar: "--mds-color-neutral-700", hex: "#3a3a3a" },
      { name: "neutral.800", cssVar: "--mds-color-neutral-800", hex: "#262626" },
      { name: "neutral.900", cssVar: "--mds-color-neutral-900", hex: "#141414" },
      { name: "neutral.950", cssVar: "--mds-color-neutral-950", hex: "#0a0a0a" },
    ],
  },
  semantic: {
    label: "Semantic",
    tokens: [
      { name: "brand.primary",   cssVar: "--mds-color-brand-primary",   hex: "#c98a1a" },
      { name: "bg.primary",      cssVar: "--mds-color-bg-primary",      hex: "var(--mds-color-neutral-950)" },
      { name: "bg.secondary",    cssVar: "--mds-color-bg-secondary",    hex: "var(--mds-color-neutral-900)" },
      { name: "text.primary",    cssVar: "--mds-color-text-primary",    hex: "var(--mds-color-neutral-50)" },
      { name: "text.secondary",  cssVar: "--mds-color-text-secondary",  hex: "var(--mds-color-neutral-300)" },
      { name: "text.muted",      cssVar: "--mds-color-text-muted",      hex: "var(--mds-color-neutral-500)" },
      { name: "border.default",  cssVar: "--mds-color-border-default",  hex: "var(--mds-color-neutral-800)" },
    ],
  },
}

// ─── SPACING ───────────────────────────────────────────────────────────────

export const spacingTokens = [
  { name: "spacing.0",   cssVar: "--mds-spacing-0",   value: "0px",    px: 0   },
  { name: "spacing.px",  cssVar: "--mds-spacing-px",  value: "1px",    px: 1   },
  { name: "spacing.0.5", cssVar: "--mds-spacing-0-5", value: "0.125rem", px: 2 },
  { name: "spacing.1",   cssVar: "--mds-spacing-1",   value: "0.25rem",  px: 4  },
  { name: "spacing.1.5", cssVar: "--mds-spacing-1-5", value: "0.375rem", px: 6  },
  { name: "spacing.2",   cssVar: "--mds-spacing-2",   value: "0.5rem",   px: 8  },
  { name: "spacing.3",   cssVar: "--mds-spacing-3",   value: "0.75rem",  px: 12 },
  { name: "spacing.4",   cssVar: "--mds-spacing-4",   value: "1rem",     px: 16 },
  { name: "spacing.5",   cssVar: "--mds-spacing-5",   value: "1.25rem",  px: 20 },
  { name: "spacing.6",   cssVar: "--mds-spacing-6",   value: "1.5rem",   px: 24 },
  { name: "spacing.8",   cssVar: "--mds-spacing-8",   value: "2rem",     px: 32 },
  { name: "spacing.10",  cssVar: "--mds-spacing-10",  value: "2.5rem",   px: 40 },
  { name: "spacing.12",  cssVar: "--mds-spacing-12",  value: "3rem",     px: 48 },
  { name: "spacing.16",  cssVar: "--mds-spacing-16",  value: "4rem",     px: 64 },
  { name: "spacing.20",  cssVar: "--mds-spacing-20",  value: "5rem",     px: 80 },
  { name: "spacing.24",  cssVar: "--mds-spacing-24",  value: "6rem",     px: 96 },
  { name: "spacing.32",  cssVar: "--mds-spacing-32",  value: "8rem",     px: 128 },
]

// ─── TYPOGRAPHY ────────────────────────────────────────────────────────────

export const typographyTokens = {
  sizes: [
    { name: "text.xs",   cssVar: "--mds-font-size-xs",   value: "0.75rem",  px: "12px"  },
    { name: "text.sm",   cssVar: "--mds-font-size-sm",   value: "0.875rem", px: "14px"  },
    { name: "text.base", cssVar: "--mds-font-size-base", value: "1rem",     px: "16px"  },
    { name: "text.lg",   cssVar: "--mds-font-size-lg",   value: "1.125rem", px: "18px"  },
    { name: "text.xl",   cssVar: "--mds-font-size-xl",   value: "1.25rem",  px: "20px"  },
    { name: "text.2xl",  cssVar: "--mds-font-size-2xl",  value: "1.5rem",   px: "24px"  },
    { name: "text.3xl",  cssVar: "--mds-font-size-3xl",  value: "1.875rem", px: "30px"  },
    { name: "text.4xl",  cssVar: "--mds-font-size-4xl",  value: "2.25rem",  px: "36px"  },
    { name: "text.5xl",  cssVar: "--mds-font-size-5xl",  value: "3rem",     px: "48px"  },
    { name: "text.6xl",  cssVar: "--mds-font-size-6xl",  value: "3.75rem",  px: "60px"  },
    { name: "text.7xl",  cssVar: "--mds-font-size-7xl",  value: "4.5rem",   px: "72px"  },
  ],
  families: [
    { name: "font.sans",  cssVar: "--mds-font-family-sans",  value: "Inter, ui-sans-serif, system-ui, sans-serif" },
    { name: "font.serif", cssVar: "--mds-font-family-serif", value: "Georgia, ui-serif, serif"                    },
    { name: "font.mono",  cssVar: "--mds-font-family-mono",  value: "JetBrains Mono, ui-monospace, monospace"     },
  ],
  weights: [
    { name: "font.thin",       cssVar: "--mds-font-weight-thin",       value: "100", label: "Thin"       },
    { name: "font.light",      cssVar: "--mds-font-weight-light",      value: "300", label: "Light"      },
    { name: "font.normal",     cssVar: "--mds-font-weight-normal",     value: "400", label: "Normal"     },
    { name: "font.medium",     cssVar: "--mds-font-weight-medium",     value: "500", label: "Medium"     },
    { name: "font.semibold",   cssVar: "--mds-font-weight-semibold",   value: "600", label: "Semibold"   },
    { name: "font.bold",       cssVar: "--mds-font-weight-bold",       value: "700", label: "Bold"       },
    { name: "font.extrabold",  cssVar: "--mds-font-weight-extrabold",  value: "800", label: "Extrabold"  },
    { name: "font.black",      cssVar: "--mds-font-weight-black",      value: "900", label: "Black"      },
  ],
  lineHeights: [
    { name: "leading.none",    cssVar: "--mds-line-height-none",    value: "1"    },
    { name: "leading.tight",   cssVar: "--mds-line-height-tight",   value: "1.25" },
    { name: "leading.snug",    cssVar: "--mds-line-height-snug",    value: "1.375" },
    { name: "leading.normal",  cssVar: "--mds-line-height-normal",  value: "1.5"  },
    { name: "leading.relaxed", cssVar: "--mds-line-height-relaxed", value: "1.625" },
    { name: "leading.loose",   cssVar: "--mds-line-height-loose",   value: "2"    },
  ],
}

// ─── RADIUS ─────────────────────────────────────────────────────────────────

export const radiusTokens = [
  { name: "radius.none",  cssVar: "--mds-radius-none",  value: "0px"      },
  { name: "radius.sm",    cssVar: "--mds-radius-sm",    value: "0.125rem" },
  { name: "radius.base",  cssVar: "--mds-radius-base",  value: "0.25rem"  },
  { name: "radius.md",    cssVar: "--mds-radius-md",    value: "0.375rem" },
  { name: "radius.lg",    cssVar: "--mds-radius-lg",    value: "0.5rem"   },
  { name: "radius.xl",    cssVar: "--mds-radius-xl",    value: "0.75rem"  },
  { name: "radius.2xl",   cssVar: "--mds-radius-2xl",   value: "1rem"     },
  { name: "radius.3xl",   cssVar: "--mds-radius-3xl",   value: "1.5rem"   },
  { name: "radius.full",  cssVar: "--mds-radius-full",  value: "9999px"   },
]

// ─── SHADOWS ──────────────────────────────────────────────────────────────

export const shadowTokens = [
  { name: "shadow.none", cssVar: "--mds-shadow-none", value: "none"                                                                                          },
  { name: "shadow.xs",   cssVar: "--mds-shadow-xs",   value: "0 1px 2px 0 rgb(0 0 0 / 0.05)"                                                                },
  { name: "shadow.sm",   cssVar: "--mds-shadow-sm",   value: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)"                               },
  { name: "shadow.md",   cssVar: "--mds-shadow-md",   value: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"                            },
  { name: "shadow.lg",   cssVar: "--mds-shadow-lg",   value: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)"                          },
  { name: "shadow.xl",   cssVar: "--mds-shadow-xl",   value: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"                         },
  { name: "shadow.2xl",  cssVar: "--mds-shadow-2xl",  value: "0 25px 50px -12px rgb(0 0 0 / 0.25)"                                                          },
  { name: "shadow.gold", cssVar: "--mds-shadow-gold", value: "0 0 0 1px rgb(201 138 26 / 0.3), 0 4px 24px -4px rgb(201 138 26 / 0.2)"                      },
]

// ─── MOTION ───────────────────────────────────────────────────────────────

export const motionTokens = {
  durations: [
    { name: "motion.duration.instant", cssVar: "--mds-motion-duration-instant", value: "100ms",  ms: 100,  label: "instant", desc: "Micro feedback, toggles"         },
    { name: "motion.duration.fast",    cssVar: "--mds-motion-duration-fast",    value: "150ms",  ms: 150,  label: "fast",    desc: "Hover, small state changes"       },
    { name: "motion.duration.base",    cssVar: "--mds-motion-duration-base",    value: "300ms",  ms: 300,  label: "base",    desc: "Standard transitions"              },
    { name: "motion.duration.slow",    cssVar: "--mds-motion-duration-slow",    value: "600ms",  ms: 600,  label: "slow",    desc: "Modals, page sections"             },
    { name: "motion.duration.glacial", cssVar: "--mds-motion-duration-glacial", value: "1200ms", ms: 1200, label: "glacial", desc: "Hero animations, reveals"          },
  ],
  easings: [
    { name: "motion.easing.ease",    cssVar: "--mds-motion-easing-ease",    value: "cubic-bezier(0.4, 0, 0.2, 1)",      label: "ease",    desc: "Default smooth"        },
    { name: "motion.easing.easeIn",  cssVar: "--mds-motion-easing-easein",  value: "cubic-bezier(0.4, 0, 1, 1)",        label: "easeIn",  desc: "Elements leaving"      },
    { name: "motion.easing.easeOut", cssVar: "--mds-motion-easing-easeout", value: "cubic-bezier(0, 0, 0.2, 1)",        label: "easeOut", desc: "Elements entering"     },
    { name: "motion.easing.spring",  cssVar: "--mds-motion-easing-spring",  value: "cubic-bezier(0.34, 1.56, 0.64, 1)", label: "spring",  desc: "Bouncy, playful"       },
  ],
  springs: [
    { name: "spring.gentle", stiffness: 120, damping: 14, label: "Gentle", desc: "Soft, subtle movement"    },
    { name: "spring.stiff",  stiffness: 300, damping: 30, label: "Stiff",  desc: "Responsive, snappy"       },
    { name: "spring.wobbly", stiffness: 180, damping: 12, label: "Wobbly", desc: "Expressive, bouncy"       },
  ],
}
