# My Car

**My Car** is a multilingual vehicle-management application for drivers in Bulgaria, Europe and the United Kingdom. Its goal is to bring vehicle information, fuel, trips, expenses, maintenance, documents and reminders together in one place.

## Product goals

- Responsive experience for Android, iPhone, tablets and desktop.
- The localization system is extensible and is not limited to a fixed number of languages. Six complete language packs are currently included: Bulgarian, English, Spanish, German, Portuguese and Russian. Other languages need their own translation pack before they can be offered as fully translated.
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
20. Extensible multilingual interface; six complete translations are currently included, with no fixed architectural limit on adding further language packs.

## Mandatory quality requirements

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
- Extensible localization framework; six translated language packs are currently included (Bulgarian, English, Spanish, German, Portuguese and Russian).
- Automatic initial language detection from the browser/device language and saved manual language choice.
- Localized garage, vehicle profile, vehicle form and fuel-log interface; additional languages can be added to the translation dictionary.
- Responsive app shell.
- Language selector generated from available translation packs, not a hard-coded list in HTML.
- Automatic initial language selection based on the device language, with English fallback; manual language selection is saved locally.
- Localized vehicle-garage interface, vehicle profile and fuel log.
- Add, edit and delete vehicle profiles; repaired a JavaScript syntax error that prevented the app scripts and the Add Vehicle button from running.
- Open a vehicle profile by selecting its vehicle card.
- Show saved vehicle details and edit them while preserving existing records.
- Record fuel fills per vehicle with date, fuel type, litres, unit price, calculated total, odometer and full-tank flag.
- Record vehicle expenses by date and category (repairs, maintenance, parts, tyres, insurance, taxes and other), with optional description and odometer; view the total and delete individual entries.
- View fuel history and calculate L/100 km from full-tank-to-full-tank intervals, including intervening partial fills.
- Validate an entered vehicle year (1900–2100) before saving.
- Up to 3 vehicles in the basic local prototype.
- Browser localStorage for the vehicle list.
- Basic offline app-shell caching through a service worker.
- **My Car app icon:** branded SVG icon referenced by the web page and PWA manifest, and included in the offline app cache.

Not implemented yet:
- Trips, expenses, maintenance and service history.
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
- [x] Add fuel log, odometer readings and full-tank interval L/100 km calculations.
- [x] Add extensible language-pack selector, device-language detection and localized core vehicle/fuel screens.
- [ ] Add trip recording and trip-cost calculations.
- [x] Add a basic per-vehicle expense log with categories, total and deletion.
- [ ] Expand expenses into maintenance and service history.
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

Update this README whenever application functionality, technical decisions, limitations or release status changes. The expense log is an initial local prototype and is not yet a substitute for a full accounting or service-record system. Keep the implemented status separate from planned features; never describe a planned feature as available before it is built and tested.

## License

All rights reserved. This repository is private and the application is a proprietary product. No permission to copy, distribute or commercially use the code is granted without written permission from the owner.


## Test data and verification

A separate demonstration mode is available at `?demo=1`. It loads three fictional sample vehicles (Toyota Corolla petrol, Volkswagen Passat diesel and Dacia Duster LPG), with technical profiles, multiple fuel fills, full/partial tank records and expense entries covering all seven expense categories. Demo changes are stored under a separate localStorage key (`my-car-demo-vehicles-v1`) and do not overwrite the user's normal vehicle list. Use the “Изход от тестовия режим” link to return to the regular app.

### Verified by code review
- Vehicle creation is limited to three records; edit preserves existing fuel and expense arrays; delete removes the selected vehicle.
- Fuel total is calculated from litres × unit price and the form rejects non-positive litres/prices and decreasing odometer values.
- Full-tank consumption uses the litres accumulated between consecutive full-tank entries, including intervening partial fills.
- Expense records are stored per vehicle; totals are summed from numeric amounts; category labels are localized; individual records can be deleted.
- **Fixed:** opening a vehicle profile now renders both fuel history and expense history, including the total expense amount.
- Demo mode uses a separate storage key, so the sample records are isolated from normal user data.

### Manual regression checklist
1. Open each of the three demo vehicles and check profile fields, fuel history, average consumption, expense descriptions and totals.
2. Add a fuel entry; confirm the calculated total, saved history row and updated consumption after a full-tank interval.
3. Try zero/negative litres or price and a lower odometer; confirm validation blocks invalid entries.
4. Add one expense in each category and verify its amount appears in the history and total.
5. Delete one expense and verify both the row and total update.
6. Edit a vehicle and confirm its fuel and expense history remains intact.
7. Refresh the demo page and confirm all demo records remain.
8. Exit demo mode and confirm the normal vehicle list is unchanged.

**Testing limitation:** code-path and data-model checks are documented here; real-device browser interaction still needs to be completed on the target Android/iPhone/desktop browsers. Demo data is fictional and intended only for inspection.
