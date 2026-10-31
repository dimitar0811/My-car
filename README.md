# My Car

**My Car** is a multilingual vehicle-management application for drivers in Bulgaria, Europe and the United Kingdom. Its goal is to bring vehicle information, fuel, trips, expenses, maintenance, documents and reminders together in one place.

## Product goals

- Responsive experience for Android, iPhone, tablets and desktop.
- Bulgarian and English interface from the first release, with room for more languages.
- A useful basic version without a subscription and without advertisements.
- Local-first data storage, with optional cloud services in a future subscription.
- Clear, reliable information and user confirmation before saving data extracted from documents.

## Approved feature scope

1. Manage multiple vehicles.
2. Detailed vehicle profiles: make, model, year, engine, power, fuel type, transmission, VIN, tyre sizes, tank capacity and recommended consumables.
3. Fuel log and fuel-consumption calculation in L/100 km.
4. Vehicle expenses, repairs, parts, tyres and maintenance costs.
5. Manual trip recording and optional GPS trip recording (only with permission), with the ability to edit trips.
6. Service history and maintenance records.
7. Vehicle documents and photos.
8. Reminders for technical inspections, insurance, road fees/vignettes, oil, tyres and other due dates or mileage-based intervals.
9. Configurable advance notifications, with suggested 30-, 15- and 7-day reminders.
10. Calendar combining upcoming payments, service visits and document expiry dates.
11. Statistics, total cost of ownership and PDF vehicle-history reports.
12. Registration-document scanning (OCR), with user review and confirmation of every extracted value before saving.
13. Vehicle comparison, including fuel consumption, maintenance costs and total running costs.
14. Fuel-price log for petrol, diesel, LPG and other fuel types, including price history and trip-cost estimates.
15. Nearby fuel-station map with available fuel prices, distance and navigation to a selected station. Prices must show when they were last updated.
16. Smart vehicle assistant with reminders based on dates, mileage and service intervals, plus an interactive chat using the vehicle profile and recorded service history. It must distinguish recommendations from mandatory service intervals and must not present guesses as certain diagnoses.
17. SOS and roadside assistance: quick access to 112, roadside assistance, location sharing, insurer and emergency contact details. Calls and location sharing require explicit user confirmation; nothing is triggered automatically.
18. Export, backup, restore and transfer of vehicle data when changing phones.
19. Optional cloud backup and synchronisation, subject to a validated technical and privacy design.
20. Multilingual interface, initially Bulgarian and English.

## Mandatory quality requirements

These are core product requirements, not optional paid features:

- **Security and privacy:** protect VINs, documents and personal data; collect and share only what is needed.
- **Offline operation:** allow users to enter and view their data without internet, then synchronise safely when connectivity returns.
- **Automatic saving:** prevent loss of entered information when the app is closed or the device changes.
- **Data integrity:** avoid duplicate or conflicting records during backup, restore and synchronisation.
- **User control:** ask permission before GPS tracking, location sharing, calls, document capture or other sensitive actions.

## Product limits and business model

- **Basic version:** target one-time purchase price currently discussed at €3.49; up to 3 vehicles.
- **Optional cloud version:** subscription; up to 10 vehicles initially, with room to increase.
- No advertisements.
- Prices, exact feature availability and subscription details remain subject to final product and store review.

## Current implementation

The repository currently contains an early responsive Progressive Web App (PWA) prototype, without a third-party framework or runtime dependency.

Implemented in the current starter build:
- Responsive app shell.
- Bulgarian and English language toggle.
- Add, edit and delete vehicle profiles.
- Validate an entered vehicle year (1900–2100) before saving.
- Up to 3 vehicles in the basic local prototype.
- Browser localStorage for the vehicle list.
- Basic offline app-shell caching through a service worker.

Not implemented yet:
- Vehicle editing and full technical profiles.
- Fuel, trips, expenses, maintenance and service history.
- Documents, OCR and PDF reports.
- Reminders, notifications and calendar.
- Vehicle comparison and fuel-price features.
- Maps, GPS trip recording and navigation.
- Smart assistant and SOS workflows.
- Export/import, backup, restore and cloud synchronisation.
- Production-grade encryption, security review and robust offline conflict handling.

**Important:** this is an early prototype, not a production release. Data is currently stored in the browser on the device. Clearing browser data or uninstalling/resetting the browser may remove it. Browser localStorage is not a secure encrypted vault. Do not use the prototype for sensitive documents or as the only copy of important vehicle records.

## Development roadmap

- [x] Create project repository and initial documentation.
- [x] Build the first responsive app shell.
- [x] Add bilingual interface and local vehicle list prototype.
- [ ] Validate the current app on Android, iPhone, tablet and desktop.
- [ ] Design a reliable data model and local persistence layer.
- [x] Add vehicle editing and basic year validation.
- [ ] Add detailed technical profiles.
- [ ] Implement data export/import and safe backup/restore.
- [ ] Add fuel log, odometer history, trips and L/100 km calculations.
- [ ] Add expenses, maintenance and service history.
- [ ] Add reminders, notifications and calendar.
- [ ] Add documents, OCR with confirmation and PDF reports.
- [ ] Add vehicle comparison and fuel-price tracking.
- [ ] Evaluate fuel-station data sources, maps and navigation.
- [ ] Design GPS trip recording with explicit permission and user controls.
- [ ] Design smart assistant and SOS/roadside assistance workflows safely.
- [ ] Design optional cloud backup and synchronisation.
- [ ] Complete security, privacy, accessibility and cross-device testing.
- [ ] Prepare store-ready builds and privacy/legal documentation.

## Run locally

Open `index.html` in a local development server or deploy the repository with GitHub Pages. Service-worker features require HTTPS (or localhost).

## Development notes

Update this README whenever application functionality, technical decisions, limitations or release status changes. Keep the implemented status separate from planned features; never describe a planned feature as available before it is built and tested.

## License

All rights reserved. This repository is private and the application is a proprietary product. No permission to copy, distribute or commercially use the code is granted without written permission from the owner.
