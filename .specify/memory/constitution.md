<!--
SYNC IMPACT REPORT
==================
Version change: 0.0.0 → 1.0.0
Bump rationale: Initial constitution adoption (MAJOR - new governance framework)

Modified principles: N/A (initial adoption)
Added sections:
  - Core Principles (5 principles)
  - Development Workflow
  - Governance

Removed sections: N/A (initial adoption)

Templates requiring updates:
  - .specify/templates/plan-template.md ✅ Compatible (Constitution Check section exists)
  - .specify/templates/spec-template.md ✅ Compatible (requirements align)
  - .specify/templates/tasks-template.md ✅ Compatible (task structure aligns)

Follow-up TODOs: None
-->

# BeechTree Constitution

## Core Principles

### I. Performance First

Every user interaction MUST feel instantaneous. Page loads MUST complete in under 2 seconds on standard connections. Components MUST render without layout shift (CLS < 0.1). Images MUST be optimized and lazy-loaded. Client-side JavaScript MUST be minimized through server components where possible.

**Rationale**: BeechTree serves K-12 educators and students in environments with varying connectivity. Slow experiences lose engagement and erode trust.

### II. Accessible by Default

All UI components MUST meet WCAG 2.1 AA standards. Interactive elements MUST be keyboard navigable. Color contrast MUST meet minimum ratios (4.5:1 for text, 3:1 for UI). Screen reader support MUST be tested for all new features. Focus states MUST be visible.

**Rationale**: Educational technology must serve all learners, including those with disabilities. Accessibility is not optional.

### III. Mobile-Responsive Design

All features MUST work on mobile devices (320px minimum width). Touch targets MUST be at least 44x44 pixels. Navigation MUST be usable on small screens. Forms MUST be optimized for mobile input. No horizontal scrolling on any viewport.

**Rationale**: Educators and students access BeechTree from diverse devices including tablets and phones in classroom settings.

### IV. User-Centric Simplicity

Interfaces MUST prioritize the most common user tasks. Complex features MUST use progressive disclosure. Error messages MUST be clear and actionable. Onboarding MUST be intuitive without documentation. Every click MUST have clear purpose.

**Rationale**: Teachers have limited time. Technology should reduce cognitive load, not add to it.

### V. Visual Consistency

All components MUST use the established design system (shadcn/ui + Tailwind). Spacing, typography, and colors MUST follow defined scales. New components MUST match existing patterns. Theme support (light/dark) MUST be consistent across all pages.

**Rationale**: A consistent visual language builds trust and reduces learning curve for users navigating between features.

## Development Workflow

### Code Review Requirements

- All changes MUST be submitted via pull request
- PRs MUST include description of UX impact for user-facing changes
- Visual changes MUST include screenshots or recordings
- Breaking changes MUST be clearly documented
- PRs SHOULD be reviewed within 24 hours

### Branch Strategy

- `main` branch contains production-ready code
- Feature branches MUST follow pattern: `feature/description` or `###-feature-name`
- Hotfix branches MUST follow pattern: `hotfix/description`
- Branches MUST be deleted after merge

### Deployment Process

- All merges to `main` trigger production deployment via Vercel
- Preview deployments are generated for all PRs
- Performance budgets MUST pass before merge
- Lighthouse scores MUST maintain minimum thresholds (Performance: 90, Accessibility: 100)

### Testing Expectations

- New components SHOULD include visual regression coverage
- User flows SHOULD have end-to-end test coverage
- Performance-critical paths MUST be monitored

## Governance

### Amendment Process

1. Propose changes via PR to this constitution file
2. Changes MUST include rationale and impact assessment
3. All active contributors MUST be notified
4. Approval requires consensus or majority vote
5. Changes take effect upon merge to main

### Versioning Policy

- **MAJOR**: Principle removal, redefinition, or backward-incompatible governance changes
- **MINOR**: New principle added, section expanded, or material guidance changes
- **PATCH**: Clarifications, typo fixes, non-semantic refinements

### Compliance Review

- New features MUST be checked against relevant principles before implementation
- Code reviews MUST verify adherence to applicable principles
- Violations require explicit justification in PR description
- Repeated violations warrant team discussion

### Guidance Reference

Runtime development guidance is maintained in this constitution and the `.specify/` templates. When in doubt, principles in this document take precedence.

**Version**: 1.0.0 | **Ratified**: 2026-01-31 | **Last Amended**: 2026-01-31
