# My Car

**My Car** is a multilingual vehicle-management application for drivers in Bulgaria, Europe and the United Kingdom. The goal is to make vehicle ownership easier by keeping vehicle details, fuel, expenses, maintenance, documents and reminders together.

## Product goals

- Responsive experience for Android, iPhone, tablets and desktop.
- Bulgarian and English interface from the first release.
- A useful basic version that works without a subscription.
- No advertisements.
- Local-first data storage in the basic version.
- Optional cloud services in a future paid subscription.

## Planned features

1. Manage multiple vehicles.
2. Vehicle profiles: make, model, registration number and other details.
3. Fuel entries and automatic fuel-consumption calculation (L/100 km).
4. Vehicle expenses, repairs, parts, tyres and maintenance.
5. Reminders for roadworthiness inspections, insurance, road fees/vignettes, oil and tyres.
6. Service history.
7. Vehicle documents and photos.
8. Statistics and total cost of ownership.
9. PDF vehicle-history report, useful when selling a vehicle.
10. Registration-document scanning (OCR), with user confirmation of every extracted value.

## Product limits and business model

- **Basic version:** one-time purchase target currently discussed at €3.49; up to 3 vehicles.
- **Optional cloud version:** subscription; up to 10 vehicles initially, with room to increase the limit.
- No advertising in either version.
- Cloud backup and multi-device synchronisation are planned optional services and will be implemented only after the technical design is validated.

Prices and feature availability are subject to final product and store review.

## Current implementation

The initial project shell is being built as a responsive Progressive Web App (PWA), without a third-party framework or runtime dependency.

Available in this starter build:
- Bulgarian and English language toggle.
- Add and delete vehicle profiles.
- Up to 3 vehicles in the basic local prototype.
- Local browser storage.
- Basic offline app-shell caching through a service worker.

**Important:** this is an early prototype, not a production release. Data is currently stored in the browser on the device. Clearing browser data or uninstalling/resetting the browser may remove it. Export, import, backup and sync are not implemented yet.

## Run locally

Open `index.html` in a local development server or deploy the repository with GitHub Pages. Service-worker features require HTTPS (or localhost).

## Roadmap

- [x] Create project repository and initial documentation.
- [x] Build the first responsive app shell.
- [x] Add bilingual interface and local vehicle list prototype.
- [ ] Test on Android, iPhone, tablet and desktop.
- [ ] Add vehicle editing and data export/import.
- [ ] Add fuel log and L/100 km calculations.
- [ ] Add expenses and service history.
- [ ] Add reminders and notifications.
- [ ] Add document storage and PDF reports.
- [ ] Evaluate OCR for registration documents with mandatory user confirmation.
- [ ] Design optional cloud backup and synchronisation.
- [ ] Prepare store-ready builds and privacy/legal documentation.

## Development notes

Update this README whenever application functionality, technical decisions, limitations or release status changes.

## License

All rights reserved. This repository is private and the application is a proprietary product. No permission to copy, distribute or commercially use the code is granted without written permission from the owner.
