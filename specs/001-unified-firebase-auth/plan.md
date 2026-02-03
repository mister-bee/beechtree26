# Implementation Plan: Unified Firebase Authentication

**Branch**: `001-unified-firebase-auth` | **Date**: 2026-01-31 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-unified-firebase-auth/spec.md`

## Summary

Implement a unified authentication system using Firebase Authentication (shared with Kansha) that allows users to sign in from any BeechTree application mode (education, marketing, property). A Login button will be added to the navbar across all sections, linking to a dedicated auth page. This lays the groundwork for future Stripe payment integration.

## Technical Context

**Language/Version**: TypeScript 5.x, React 19, Next.js 16
**Primary Dependencies**: Firebase Auth SDK, Next.js App Router, shadcn/ui, Tailwind CSS
**Storage**: Firebase Authentication (shared with Kansha)
**Testing**: Manual testing, Lighthouse audits
**Target Platform**: Web (responsive: desktop, tablet, mobile)
**Project Type**: Web application (Next.js App Router)
**Performance Goals**: Auth page loads < 2s, sign-in completes < 30s total flow
**Constraints**: Must integrate with existing Kansha Firebase project, no new registration flow
**Scale/Scope**: Multi-mode application (3 sections), shared auth state

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Requirement | Status |
|-----------|-------------|--------|
| I. Performance First | Auth page < 2s load, minimal JS bundle | PASS |
| II. Accessible by Default | WCAG 2.1 AA, keyboard navigation, focus states | PASS |
| III. Mobile-Responsive | 320px min width, 44x44 touch targets | PASS |
| IV. User-Centric Simplicity | Clear login flow, actionable error messages | PASS |
| V. Visual Consistency | Use shadcn/ui Button, follow existing navbar patterns | PASS |

**All gates pass.** No complexity violations.

## Project Structure

### Documentation (this feature)

```text
specs/001-unified-firebase-auth/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
├── contracts/           # Phase 1 output (N/A - no API contracts)
└── tasks.md             # Phase 2 output (/speckit.tasks command)
```

### Source Code (repository root)

```text
app/
├── page.tsx                    # Education homepage (update navbar)
├── marketing/
│   └── page.tsx                # Marketing homepage (update navbar)
├── property/
│   └── page.tsx                # Property homepage (update navbar)
├── login/
│   └── page.tsx                # NEW: Auth page
└── layout.tsx                  # Root layout (add AuthProvider)

components/
├── ui/
│   └── button.tsx              # Existing
├── auth/
│   ├── auth-provider.tsx       # NEW: Firebase auth context
│   ├── login-form.tsx          # NEW: Email/password form
│   └── user-menu.tsx           # NEW: Authenticated user dropdown

lib/
├── utils.ts                    # Existing
└── firebase/
    ├── config.ts               # NEW: Firebase configuration
    └── auth.ts                 # NEW: Auth helper functions
```

**Structure Decision**: Frontend-only web application using Next.js App Router. Firebase handles backend auth; no custom API needed. Auth components follow existing `components/ui/` pattern.
