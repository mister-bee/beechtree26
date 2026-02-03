# Research: Unified Firebase Authentication

**Feature**: 001-unified-firebase-auth
**Date**: 2026-01-31

## Firebase Authentication Integration

### Decision: Use Firebase Web SDK v9+ (modular)

**Rationale**:
- Modular imports enable tree-shaking for smaller bundle size
- Aligns with Next.js 16 and React 19 best practices
- Supports both client-side and server-side auth state

**Alternatives considered**:
- Firebase Admin SDK (server-only): Rejected because auth UI needs client-side interaction
- NextAuth.js with Firebase provider: Rejected due to added complexity; direct Firebase SDK is simpler for existing Firebase project

### Decision: Client-side authentication with React Context

**Rationale**:
- Firebase Auth SDK handles session persistence automatically
- Auth state persists via Firebase's IndexedDB storage
- Simple React Context provides auth state to all components
- No server-side session management needed (Firebase handles tokens)

**Alternatives considered**:
- Server-side sessions with cookies: More complex, requires API routes; Firebase already handles persistence
- Zustand/Redux: Overkill for simple auth state; Context is sufficient

## Shared Firebase Project (Kansha)

### Decision: Share Firebase project configuration via environment variables

**Rationale**:
- Kansha uses same Firebase project = same user database
- Environment variables keep credentials secure
- `.env.local` pattern is standard for Next.js

**Configuration needed**:
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
```

## Authentication Flow

### Decision: Dedicated `/login` route with return URL

**Rationale**:
- Single auth page simplifies maintenance
- Return URL in query string enables redirect after login
- Clean URL structure (`/login?returnUrl=/marketing`)
- Works across all three application modes

**Flow**:
1. User clicks Login in any navbar
2. Navigate to `/login?returnUrl={current_path}`
3. User submits email/password
4. On success: redirect to returnUrl (or `/` if none)
5. On failure: show inline error message

## Session Persistence

### Decision: Use Firebase default persistence (LOCAL)

**Rationale**:
- `browserLocalPersistence` keeps user signed in across tabs and browser restarts
- Standard 30-day token validity with automatic refresh
- Firebase handles token refresh transparently

**Alternatives considered**:
- Session persistence (browser tab only): Too aggressive logout for this use case
- No persistence: Poor UX for returning users

## Navbar Integration Pattern

### Decision: Conditional rendering based on auth state

**Rationale**:
- When signed out: Show "Login" button (Link to `/login`)
- When signed in: Show user avatar/menu with sign-out option
- Same pattern replicated in all three page navbars

**Current state**:
- Each page (education, marketing, property) has inline navbar
- No shared Navbar component currently exists
- Will add auth UI directly to each navbar section

**Future consideration**:
- Extract shared Navbar component if patterns diverge significantly

## Error Handling

### Decision: User-friendly error messages mapped from Firebase codes

**Firebase error codes to map**:
| Firebase Code | User Message |
|---------------|--------------|
| `auth/user-not-found` | "No account found with this email" |
| `auth/wrong-password` | "Incorrect password" |
| `auth/invalid-email` | "Please enter a valid email address" |
| `auth/too-many-requests` | "Too many attempts. Please try again later" |
| `auth/network-request-failed` | "Network error. Check your connection" |

## Mobile Responsiveness

### Decision: Full-width form on mobile, centered card on desktop

**Rationale**:
- Aligns with Constitution Principle III (Mobile-Responsive Design)
- Touch targets ≥ 44x44px for all interactive elements
- Form inputs use mobile-optimized types (email, password)

## Accessibility

### Decision: Follow existing shadcn/ui patterns with enhancements

**Requirements (Constitution Principle II)**:
- Visible focus states on all form inputs
- Error messages linked via `aria-describedby`
- Form labels properly associated
- Color contrast ≥ 4.5:1 for text
- Keyboard navigation for all interactions

## Dependencies to Add

```json
{
  "firebase": "^11.0.0"
}
```

**Note**: Only the `firebase` package is needed. No additional auth libraries required.
