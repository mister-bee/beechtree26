# Data Model: Unified Firebase Authentication

**Feature**: 001-unified-firebase-auth
**Date**: 2026-01-31

## Overview

This feature uses Firebase Authentication as the data store. No custom database tables are required. User data is managed by the existing Kansha Firebase project.

## Entities

### User (Firebase Auth)

The user entity is managed by Firebase Authentication. BeechTree accesses user data through the Firebase Auth SDK.

| Field | Type | Description |
|-------|------|-------------|
| `uid` | string | Unique Firebase user ID |
| `email` | string | User's email address |
| `displayName` | string \| null | User's display name (may be null) |
| `photoURL` | string \| null | Profile photo URL (may be null) |
| `emailVerified` | boolean | Whether email is verified |

**Source**: Firebase Auth `User` object
**Ownership**: Managed by Kansha application

### AuthState (Client-side)

React Context state representing current authentication status.

```typescript
interface AuthState {
  user: User | null;        // Firebase User or null if signed out
  loading: boolean;         // True while checking initial auth state
  error: string | null;     // Most recent auth error message
}
```

### LoginCredentials (Form Input)

Data submitted by the login form.

```typescript
interface LoginCredentials {
  email: string;            // User's email address
  password: string;         // User's password (never stored)
}
```

**Validation rules**:
- `email`: Must be valid email format
- `password`: Minimum 1 character (Firebase handles strength validation)

## State Transitions

### Authentication State Machine

```
┌─────────────┐
│   LOADING   │ ← Initial state on app mount
└──────┬──────┘
       │ Firebase auth check completes
       ▼
┌─────────────┐      signIn()      ┌─────────────┐
│ SIGNED_OUT  │ ─────────────────► │  SIGNED_IN  │
└─────────────┘                    └─────────────┘
       ▲         signOut()               │
       └─────────────────────────────────┘
```

### State Descriptions

| State | `user` | `loading` | Description |
|-------|--------|-----------|-------------|
| LOADING | null | true | Checking Firebase for existing session |
| SIGNED_OUT | null | false | No authenticated user |
| SIGNED_IN | User | false | User is authenticated |

## Relationships

```
┌─────────────────────────────────────────────────────┐
│                   Kansha Firebase                    │
│  ┌─────────────────────────────────────────────┐    │
│  │            Firebase Auth                     │    │
│  │  ┌────────────────────────────────────────┐ │    │
│  │  │ User                                   │ │    │
│  │  │ - uid (PK)                             │ │    │
│  │  │ - email                                │ │    │
│  │  │ - displayName                          │ │    │
│  │  └────────────────────────────────────────┘ │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
                        ▲
                        │ Same Firebase project
                        │
┌─────────────────────────────────────────────────────┐
│                   BeechTree App                      │
│  ┌─────────────────────────────────────────────┐    │
│  │            AuthProvider (Context)            │    │
│  │  ┌────────────────────────────────────────┐ │    │
│  │  │ AuthState                              │ │    │
│  │  │ - user: User | null                    │ │    │
│  │  │ - loading: boolean                     │ │    │
│  │  │ - error: string | null                 │ │    │
│  │  └────────────────────────────────────────┘ │    │
│  └─────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

## Data Flow

### Sign In Flow

1. User submits `LoginCredentials`
2. Firebase SDK validates against Kansha user database
3. On success: Firebase returns `User` object
4. `AuthProvider` updates state: `{ user: User, loading: false }`
5. UI reflects authenticated state

### Session Restoration Flow

1. App mounts, `AuthProvider` initializes
2. Firebase SDK checks IndexedDB for existing session
3. If valid session: Returns `User` object
4. If no session: Returns `null`
5. `AuthProvider` updates from LOADING to SIGNED_IN or SIGNED_OUT

### Sign Out Flow

1. User clicks "Sign Out"
2. `signOut()` called on Firebase Auth
3. Firebase clears local session
4. `AuthProvider` updates: `{ user: null, loading: false }`
5. Navbar reverts to showing "Login" button

## No Server-Side Data

This feature does not:
- Create new database tables
- Store credentials locally
- Create API endpoints
- Manage sessions server-side

All authentication state is managed by Firebase Authentication service.
