/**
 * Unit tests for @marcos-ds/tokens output
 *
 * Validates that Style Dictionary builds the expected token structure.
 * Run after build: pnpm --filter @marcos-ds/tokens test
 *
 * Tests validate CONTRACTS, not specific hex values —
 * this avoids brittle tests that break on every value tweak.
 */

import { readFileSync, existsSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputDir = resolve(__dirname, '../output')
const jsonPath = resolve(outputDir, 'json/tokens.json')
const cssPath = resolve(outputDir, 'css/variables.css')

// ── Output files exist ──────────────────────────────────────────────────────
describe('Style Dictionary output files', () => {
  test('JSON tokens output exists', () => {
    expect(existsSync(jsonPath)).toBe(true)
  })

  test('CSS variables output exists', () => {
    expect(existsSync(cssPath)).toBe(true)
  })
})

// ── Token structure ─────────────────────────────────────────────────────────
describe('Token structure (JSON)', () => {
  let tokens

  beforeAll(() => {
    const raw = readFileSync(jsonPath, 'utf-8')
    tokens = JSON.parse(raw)
  })

  describe('Color tokens', () => {
    test('color.brand.gold is defined', () => {
      expect(tokens?.color?.brand?.gold).toBeDefined()
    })

    test('color.neutral has at least one step', () => {
      const neutral = tokens?.color?.neutral ?? {}
      expect(Object.keys(neutral).length).toBeGreaterThan(0)
    })

    test('semantic color layer exists (background, text or surface)', () => {
      const has = tokens?.color?.background || tokens?.color?.text || tokens?.color?.surface
      expect(has).toBeDefined()
    })
  })

  describe('Spacing tokens', () => {
    test('spacing scale exists', () => {
      expect(tokens?.spacing).toBeDefined()
    })

    test('spacing has at least 4 steps', () => {
      expect(Object.keys(tokens?.spacing ?? {}).length).toBeGreaterThanOrEqual(4)
    })
  })

  describe('Typography tokens', () => {
    test('typography, fontSize or fontFamily exists', () => {
      const has = tokens?.typography || tokens?.fontSize || tokens?.fontFamily
      expect(has).toBeDefined()
    })
  })
})

// ── CSS variables ───────────────────────────────────────────────────────────
describe('CSS variables output', () => {
  let css

  beforeAll(() => {
    css = readFileSync(cssPath, 'utf-8')
  })

  test('contains :root selector', () => {
    expect(css).toContain(':root')
  })

  test('contains CSS custom properties (-- prefix)', () => {
    expect(css).toMatch(/--[a-z]/)
  })

  test('uses --mds- prefix (brand namespace)', () => {
    expect(css).toContain('--mds-')
  })
})
