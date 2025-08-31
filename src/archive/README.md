Archive folder

This directory contains snapshots of older or backup components/pages that are not currently used in the app. Files mirror their original paths where possible and include a header comment noting the original location.

Conventions
- Do not import from this folder in production code.
- When you decide something is permanently unused, delete the original and keep the archived copy for reference (or remove both if no longer needed).
- Filenames typically end with `.backup.tsx` to indicate an archived variant.

Currently archived
- components/ServicesOverview.backup.tsx (from src/components/ServicesOverview.tsx)
- components/About.backup.tsx (from src/components/About.tsx)
- components/Hero_Backup.backup.tsx (from src/components/Hero_Backup.tsx)
- components/Testimonials.backup.tsx (from src/components/Testimonials.tsx)
- app/(flow)/coaching/book/_PageBackup.backup.tsx (from src/app/(flow)/coaching/book/_PageBackup.tsx)
