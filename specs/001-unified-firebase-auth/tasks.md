# Tasks: Unified Firebase Authentication

**Input**: Design documents from `/specs/001-unified-firebase-auth/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, quickstart.md

**Tests**: Manual testing only (per spec). No automated test tasks included.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3, US4)
- Include exact file paths in descriptions

## Path Conventions

- **Next.js App Router**: `app/` for pages, `components/` for components, `lib/` for utilities
- Based on plan.md project structure

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Install dependencies and create Firebase configuration

- [x] T001 Install firebase dependency via `npm install firebase`
- [x] T002 Create Firebase configuration file at lib/firebase/config.ts with environment variable imports
- [x] T003 Create .env.local.example file documenting required Firebase environment variables

**Checkpoint**: Firebase SDK installed and configured

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core auth infrastructure that MUST be complete before ANY user story can be implemented

**CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 Create AuthState TypeScript interface in lib/firebase/auth.ts
- [x] T005 Create auth helper functions (signIn, signOut, onAuthStateChanged listener) in lib/firebase/auth.ts
- [x] T006 Create AuthProvider React context component in components/auth/auth-provider.tsx
- [x] T007 Create useAuth custom hook that consumes AuthProvider context in components/auth/auth-provider.tsx
- [x] T008 Wrap app with AuthProvider in app/layout.tsx

**Checkpoint**: Foundation ready - auth context available throughout app, user story implementation can begin

---

## Phase 3: User Story 1 - First-Time Visitor Signs In (Priority: P1) MVP

**Goal**: Users can click Login from any section navbar, sign in with Kansha credentials, and return to their previous page

**Independent Test**: Navigate to any section, click Login, sign in with valid credentials, verify user is authenticated and redirected back

### Implementation for User Story 1

- [x] T009 [US1] Create login page at app/login/page.tsx with email/password form
- [x] T010 [US1] Create LoginForm component in components/auth/login-form.tsx with email and password inputs
- [x] T011 [US1] Implement form submission in LoginForm that calls signIn from lib/firebase/auth.ts
- [x] T012 [US1] Add returnUrl query parameter handling to login page for redirect after success
- [x] T013 [P] [US1] Update education page navbar in app/page.tsx to show Login button linking to /login with returnUrl
- [x] T014 [P] [US1] Update marketing page navbar in app/marketing/page.tsx to show Login button linking to /login with returnUrl
- [x] T015 [P] [US1] Update property page navbar in app/property/page.tsx to show Login button linking to /login with returnUrl

**Checkpoint**: User Story 1 complete - users can sign in from any section and be redirected back

---

## Phase 4: User Story 2 - Returning User Quick Sign-In (Priority: P2)

**Goal**: Previously signed-in users see their authenticated state when returning; session persists across browser restarts

**Independent Test**: Sign in, close browser, reopen, verify still signed in without re-entering credentials

### Implementation for User Story 2

- [x] T016 [US2] Configure Firebase persistence to LOCAL in lib/firebase/config.ts for session persistence
- [x] T017 [US2] Add loading state handling in AuthProvider to show loading indicator while checking existing session
- [x] T018 [US2] Create UserMenu component in components/auth/user-menu.tsx showing user email/name when authenticated
- [x] T019 [P] [US2] Update education page navbar in app/page.tsx to show UserMenu when authenticated (replacing Login button)
- [x] T020 [P] [US2] Update marketing page navbar in app/marketing/page.tsx to show UserMenu when authenticated
- [x] T021 [P] [US2] Update property page navbar in app/property/page.tsx to show UserMenu when authenticated

**Checkpoint**: User Story 2 complete - returning users stay logged in, see their authenticated state

---

## Phase 5: User Story 3 - User Signs Out (Priority: P2)

**Goal**: Signed-in users can sign out from any section, and logout is reflected across all sections

**Independent Test**: Sign in, navigate to any section, click Sign Out, verify logged out across all sections

### Implementation for User Story 3

- [x] T022 [US3] Add Sign Out button to UserMenu component in components/auth/user-menu.tsx
- [x] T023 [US3] Implement sign out handler in UserMenu that calls signOut from lib/firebase/auth.ts
- [x] T024 [US3] Ensure AuthProvider state updates to signed-out after signOut completes

**Checkpoint**: User Story 3 complete - users can sign out from any section, state reflects across app

---

## Phase 6: User Story 4 - Invalid Credentials Handling (Priority: P3)

**Goal**: Users receive clear, actionable error messages when authentication fails

**Independent Test**: Enter invalid credentials, verify appropriate error message is displayed

### Implementation for User Story 4

- [x] T025 [US4] Create error message mapping function in lib/firebase/auth.ts (Firebase codes → user-friendly messages)
- [x] T026 [US4] Add error state to LoginForm component in components/auth/login-form.tsx
- [x] T027 [US4] Display inline error message in LoginForm with accessible aria-describedby linking
- [x] T028 [US4] Add network error handling with retry option in components/auth/login-form.tsx

**Checkpoint**: User Story 4 complete - users receive helpful feedback on failed login attempts

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Accessibility, responsiveness, and final validation

- [x] T029 [P] Ensure all form inputs have visible focus states per Constitution Principle II in components/auth/login-form.tsx
- [x] T030 [P] Ensure Login button and UserMenu have minimum 44x44px touch targets per Constitution Principle III
- [x] T031 [P] Ensure login page is responsive down to 320px viewport width per Constitution Principle III
- [x] T032 [P] Verify color contrast meets WCAG 4.5:1 ratio for all text in auth components
- [ ] T033 Run quickstart.md validation checklist to verify all acceptance criteria

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational phase completion
- **User Story 2 (Phase 4)**: Depends on Foundational phase; can run parallel with US1
- **User Story 3 (Phase 5)**: Depends on US2 (UserMenu component)
- **User Story 4 (Phase 6)**: Depends on US1 (LoginForm component)
- **Polish (Phase 7)**: Depends on all user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: No dependencies on other stories - MVP deliverable
- **User Story 2 (P2)**: Independent of US1; creates UserMenu component
- **User Story 3 (P2)**: Requires UserMenu from US2
- **User Story 4 (P3)**: Requires LoginForm from US1

### Within Each User Story

- Auth infrastructure before UI components
- Core implementation before polish
- Story complete before moving to next priority

### Parallel Opportunities

- T013, T014, T015 can run in parallel (different page files)
- T019, T020, T021 can run in parallel (different page files)
- T029, T030, T031, T032 can run in parallel (independent polish tasks)

---

## Parallel Example: User Story 1 Navbar Updates

```bash
# Launch all navbar updates for User Story 1 together:
Task: T013 "Update education page navbar in app/page.tsx"
Task: T014 "Update marketing page navbar in app/marketing/page.tsx"
Task: T015 "Update property page navbar in app/property/page.tsx"
```

## Parallel Example: User Story 2 Navbar Updates

```bash
# Launch all UserMenu integrations together:
Task: T019 "Update education page navbar in app/page.tsx to show UserMenu"
Task: T020 "Update marketing page navbar in app/marketing/page.tsx to show UserMenu"
Task: T021 "Update property page navbar in app/property/page.tsx to show UserMenu"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (T001-T003)
2. Complete Phase 2: Foundational (T004-T008)
3. Complete Phase 3: User Story 1 (T009-T015)
4. **STOP and VALIDATE**: Test sign-in flow independently
5. Deploy/demo if ready

### Incremental Delivery

1. Setup + Foundational → Auth infrastructure ready
2. Add User Story 1 → Test independently → **MVP: Users can sign in**
3. Add User Story 2 → Test independently → Session persistence works
4. Add User Story 3 → Test independently → Sign out works
5. Add User Story 4 → Test independently → Error handling complete
6. Polish phase → Accessibility and responsive design verified

### Recommended Execution Order

For single developer:
1. T001 → T002 → T003 (Setup)
2. T004 → T005 → T006 → T007 → T008 (Foundational - sequential)
3. T009 → T010 → T011 → T012 (LoginForm core)
4. T013, T014, T015 (parallel - navbar updates)
5. T016 → T017 → T018 (UserMenu core)
6. T019, T020, T021 (parallel - UserMenu integration)
7. T022 → T023 → T024 (Sign out)
8. T025 → T026 → T027 → T028 (Error handling)
9. T029, T030, T031, T032, T033 (parallel - polish)

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- No automated tests specified - use manual testing per quickstart.md checklist
