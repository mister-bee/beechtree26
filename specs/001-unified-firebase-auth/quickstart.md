# Quickstart: Unified Firebase Authentication

**Feature**: 001-unified-firebase-auth
**Date**: 2026-01-31

## Prerequisites

- Node.js 18+
- Access to Kansha Firebase project credentials
- BeechTree repository cloned and dependencies installed

## Setup

### 1. Install Firebase SDK

```bash
npm install firebase
```

### 2. Configure Environment Variables

Create or update `.env.local` in the project root:

```env
# Firebase Configuration (from Kansha Firebase Console)
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abc123
```

**Where to find these values**:
1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select the Kansha project
3. Click the gear icon → Project settings
4. Scroll to "Your apps" → Web app
5. Copy the config values

### 3. Start Development Server

```bash
npm run dev
```

The app runs at `http://localhost:3900`

## Usage

### Sign In

1. Navigate to any page (education, marketing, or property)
2. Click "Login" button in the navbar
3. Enter your Kansha email and password
4. Click "Sign In"

### Sign Out

1. When signed in, click your user avatar/name in the navbar
2. Click "Sign Out"

### Verify Cross-Section Authentication

1. Sign in from the education page (`/`)
2. Navigate to marketing (`/marketing`)
3. Verify you remain signed in
4. Navigate to property (`/property`)
5. Verify you remain signed in

## Testing Checklist

- [ ] Login button visible on education page navbar
- [ ] Login button visible on marketing page navbar
- [ ] Login button visible on property page navbar
- [ ] Clicking Login navigates to `/login`
- [ ] Sign in with valid credentials succeeds
- [ ] Invalid credentials show error message
- [ ] After sign in, redirects back to previous page
- [ ] Auth state persists when switching sections
- [ ] Auth state persists after browser refresh
- [ ] Sign out works from any section
- [ ] Sign out clears auth state across all sections

## Troubleshooting

### "Firebase: Error (auth/invalid-api-key)"

- Check that `.env.local` has correct `NEXT_PUBLIC_FIREBASE_API_KEY`
- Restart the dev server after changing env vars

### "Firebase: Error (auth/user-not-found)"

- User must have an account in the Kansha Firebase project
- Registration happens through Kansha, not BeechTree

### Auth state not persisting

- Check browser allows IndexedDB
- Clear browser storage and try again
- Verify Firebase project ID matches Kansha

### Login button not appearing

- Check that `AuthProvider` wraps the app in `layout.tsx`
- Verify the auth components are imported correctly

## File Locations

| File | Purpose |
|------|---------|
| `lib/firebase/config.ts` | Firebase initialization |
| `lib/firebase/auth.ts` | Auth helper functions |
| `components/auth/auth-provider.tsx` | React context provider |
| `components/auth/login-form.tsx` | Login form component |
| `components/auth/user-menu.tsx` | Authenticated user dropdown |
| `app/login/page.tsx` | Login page |

## Next Steps

After authentication is working:
1. Test with real Kansha user credentials
2. Verify Lighthouse accessibility score = 100
3. Check mobile responsiveness at 320px width
4. Proceed to Stripe payment integration (separate feature)
