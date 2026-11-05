const STORAGE_KEY = "my-car-vehicles-v1";
const DEMO_STORAGE_KEY = "my-car-demo-vehicles-v2";
const DEMO_MODE = new URLSearchParams(location.search).get("demo") === "1";
const translations = {
  bg: {eyebrow:"ТВОЯТ АВТОМОБИЛЕН ПОМОЩНИК",heading:"Всичко за автомобила. На едно място.",subtitle:"Следи автомобилите си, разходите и предстоящото обслужване лесно.",garage:"ГАРАЖ",yourCars:"Твоите автомобили",addCar:"Добави автомобил",limitNote:"Основната версия позволява до 3 автомобила.",newCar:"Нов автомобил",editCar:"Редактирай автомобил",make:"Марка",model:"Модел",registration:"Регистрационен номер",year:"Година",saveCar:"Запази автомобила",updateCar:"Запази промените",edit:"Редактирай",footer:"Твоят автомобилен дневник",empty:"Все още нямаш добавени автомобили. Започни, като добавиш първия си автомобил.",remove:"Изтрий автомобила",confirmDelete:"Сигурен ли си, че искаш да изтриеш този автомобил?",car:"Автомобил",limitReached:"Достигна лимита от 3 автомобила.",unknownYear:"Годината не е посочена.",back:"← Обратно към гаража",profile:"Профил на автомобила",engine:"Двигател",fuel:"Гориво",power:"Мощност",transmission:"Скоростна кутия",vin:"VIN номер",mileage:"Пробег (км)",color:"Цвят",notSet:"Не е посочено",saveDetails:"Запази данните",fuelLog:"ДНЕВНИК НА ГОРИВОТО",fuelHeading:"Гориво",average:"Среден разход",date:"Дата",fuelType:"Вид гориво",litres:"Литри",pricePerLitre:"Цена за литър (€)",totalAmount:"Обща сума (€)",odometer:"Пробег (км)",fullTank:"Зареждане до пълен резервоар",saveFuel:"Запиши зареждането",fuelHistory:"История на зарежданията",petrol:"Бензин",diesel:"Дизел",lpg:"Пропан-бутан (LPG)",cng:"Метан (CNG)",electricity:"Електричество",additionalData:"Допълнителни технически данни",fuelConsumption:"Разход",tapProfile:"Натисни за профил →",invalidData:"Провери въведените данни.",mileageError:"Пробегът не може да е по-малък от последния запис.",validYear:"Въведи валидна година между 1900 и 2100.",automatic:"Автоматично",emptyFuel:"Все още няма записи за зареждане.",expenseLog:"ДНЕВНИК НА РАЗХОДИТЕ",expenseHeading:"Разходи по автомобила",totalExpenses:"Общо разходи",expenseDate:"Дата",expenseCategory:"Категория",repair:"Ремонт",maintenance:"Обслужване",parts:"Части",tyres:"Гуми",insurance:"Застраховка",taxes:"Данъци и такси",other:"Други",expenseDescription:"Описание",expenseAmount:"Сума (€)",expenseOdometer:"Пробег (км)",saveExpense:"Запиши разхода",expenseHistory:"История на разходите",emptyExpenses:"Все още няма записани разходи.",deleteExpense:"Изтрий разхода",confirmDeleteExpense:"Сигурен ли си, че искаш да изтриеш този разход?"},
  en: {eyebrow:"YOUR CAR COMPANION",heading:"Everything about your car. In one place.",subtitle:"Easily track your vehicles, expenses and upcoming maintenance.",garage:"GARAGE",yourCars:"Your vehicles",addCar:"Add a vehicle",limitNote:"The basic version supports up to 3 vehicles.",newCar:"New vehicle",editCar:"Edit vehicle",make:"Make",model:"Model",registration:"Registration number",year:"Year",saveCar:"Save vehicle",updateCar:"Save changes",edit:"Edit",footer:"Your vehicle logbook",empty:"You have not added any vehicles yet. Start by adding your first car.",remove:"Delete vehicle",confirmDelete:"Are you sure you want to delete this vehicle?",car:"Vehicle",limitReached:"You have reached the 3-vehicle limit.",unknownYear:"Year not provided.",back:"← Back to garage",profile:"Vehicle profile",engine:"Engine",fuel:"Fuel type",power:"Power",transmission:"Transmission",vin:"VIN",mileage:"Mileage (km)",color:"Colour",notSet:"Not provided",saveDetails:"Save details",fuelLog:"FUEL LOG",fuelHeading:"Fuel",average:"Average consumption",date:"Date",fuelType:"Fuel type",litres:"Litres",pricePerLitre:"Price per litre (€)",totalAmount:"Total amount (€)",odometer:"Odometer (km)",fullTank:"Full tank",saveFuel:"Save fuel entry",fuelHistory:"Fuel history",petrol:"Petrol",diesel:"Diesel",lpg:"LPG",cng:"CNG",electricity:"Electricity",additionalData:"Additional technical details",fuelConsumption:"Consumption",tapProfile:"Tap to view profile →",invalidData:"Check the entered values.",mileageError:"Mileage cannot be lower than the latest entry.",validYear:"Enter a valid year between 1900 and 2100.",automatic:"Automatic",emptyFuel:"No fuel entries yet.",expenseLog:"EXPENSE LOG",expenseHeading:"Vehicle expenses",totalExpenses:"Total expenses",expenseDate:"Date",expenseCategory:"Category",repair:"Repair",maintenance:"Maintenance",parts:"Parts",tyres:"Tyres",insurance:"Insurance",taxes:"Taxes and fees",other:"Other",expenseDescription:"Description",expenseAmount:"Amount (€)",expenseOdometer:"Odometer (km)",saveExpense:"Save expense",expenseHistory:"Expense history",emptyExpenses:"No expenses recorded yet.",deleteExpense:"Delete expense",confirmDeleteExpense:"Are you sure you want to delete this expense?"},
  es: {eyebrow:"TU ASISTENTE PARA EL COCHE",heading:"Todo sobre tu coche. En un solo lugar.",subtitle:"Controla fácilmente tus vehículos, gastos y próximo mantenimiento.",garage:"GARAJE",yourCars:"Tus vehículos",addCar:"Añadir vehículo",limitNote:"La versión básica permite hasta 3 vehículos.",newCar:"Nuevo vehículo",editCar:"Editar vehículo",make:"Marca",model:"Modelo",registration:"Matrícula",year:"Año",saveCar:"Guardar vehículo",updateCar:"Guardar cambios",edit:"Editar",footer:"Tu registro del vehículo",empty:"Todavía no has añadido vehículos. Añade tu primer coche.",remove:"Eliminar vehículo",confirmDelete:"¿Seguro que quieres eliminar este vehículo?",car:"Vehículo",limitReached:"Has alcanzado el límite de 3 vehículos.",unknownYear:"Año no indicado.",back:"← Volver al garaje",profile:"Perfil del vehículo",engine:"Motor",fuel:"Combustible",power:"Potencia",transmission:"Transmisión",vin:"Número VIN",mileage:"Kilometraje (km)",color:"Color",notSet:"No indicado",saveDetails:"Guardar datos",fuelLog:"REGISTRO DE COMBUSTIBLE",fuelHeading:"Combustible",average:"Consumo medio",date:"Fecha",fuelType:"Tipo de combustible",litres:"Litros",pricePerLitre:"Precio por litro (€)",totalAmount:"Importe total (€)",odometer:"Kilometraje (km)",fullTank:"Depósito lleno",saveFuel:"Guardar repostaje",fuelHistory:"Historial de repostajes",petrol:"Gasolina",diesel:"Diésel",lpg:"GLP",cng:"GNC",electricity:"Electricidad",additionalData:"Datos técnicos adicionales",fuelConsumption:"Consumo",tapProfile:"Pulsa para ver el perfil →",invalidData:"Comprueba los datos introducidos.",mileageError:"El kilometraje no puede ser inferior al último registro.",validYear:"Introduce un año válido entre 1900 y 2100.",automatic:"Automático",emptyFuel:"Todavía no hay repostajes registrados.",expenseLog:"REGISTRO DE GASTOS",expenseHeading:"Gastos del vehículo",totalExpenses:"Gastos totales",expenseDate:"Fecha",expenseCategory:"Categoría",repair:"Reparación",maintenance:"Mantenimiento",parts:"Piezas",tyres:"Neumáticos",insurance:"Seguro",taxes:"Impuestos y tasas",other:"Otros",expenseDescription:"Descripción",expenseAmount:"Importe (€)",expenseOdometer:"Kilometraje (km)",saveExpense:"Guardar gasto",expenseHistory:"Historial de gastos",emptyExpenses:"Todavía no hay gastos registrados.",deleteExpense:"Eliminar gasto",confirmDeleteExpense:"¿Seguro que quieres eliminar este gasto?"},
  de: {eyebrow:"DEIN AUTO-ASSISTENT",heading:"Alles rund ums Auto. An einem Ort.",subtitle:"Verwalte Fahrzeuge, Kosten und anstehende Wartungen ganz einfach.",garage:"GARAGE",yourCars:"Deine Fahrzeuge",addCar:"Fahrzeug hinzufügen",limitNote:"Die Basisversion unterstützt bis zu 3 Fahrzeuge.",newCar:"Neues Fahrzeug",editCar:"Fahrzeug bearbeiten",make:"Marke",model:"Modell",registration:"Kennzeichen",year:"Baujahr",saveCar:"Fahrzeug speichern",updateCar:"Änderungen speichern",edit:"Bearbeiten",footer:"Dein Fahrzeugtagebuch",empty:"Du hast noch kein Fahrzeug hinzugefügt. Füge dein erstes Auto hinzu.",remove:"Fahrzeug löschen",confirmDelete:"Möchtest du dieses Fahrzeug wirklich löschen?",car:"Fahrzeug",limitReached:"Du hast das Limit von 3 Fahrzeugen erreicht.",unknownYear:"Baujahr nicht angegeben.",back:"← Zurück zur Garage",profile:"Fahrzeugprofil",engine:"Motor",fuel:"Kraftstoff",power:"Leistung",transmission:"Getriebe",vin:"Fahrzeug-Identifikationsnummer (VIN)",mileage:"Kilometerstand (km)",color:"Farbe",notSet:"Nicht angegeben",saveDetails:"Daten speichern",fuelLog:"TANKBUCH",fuelHeading:"Kraftstoff",average:"Durchschnittsverbrauch",date:"Datum",fuelType:"Kraftstoffart",litres:"Liter",pricePerLitre:"Preis pro Liter (€)",totalAmount:"Gesamtbetrag (€)",odometer:"Kilometerstand (km)",fullTank:"Vollgetankt",saveFuel:"Tankvorgang speichern",fuelHistory:"Tankverlauf",petrol:"Benzin",diesel:"Diesel",lpg:"Autogas (LPG)",cng:"Erdgas (CNG)",electricity:"Strom",additionalData:"Zusätzliche technische Daten",fuelConsumption:"Verbrauch",tapProfile:"Zum Profil tippen →",invalidData:"Bitte überprüfe deine Eingaben.",mileageError:"Der Kilometerstand darf nicht niedriger als der letzte Eintrag sein.",validYear:"Bitte gib ein gültiges Jahr zwischen 1900 und 2100 ein.",automatic:"Automatisch",emptyFuel:"Noch keine Tankvorgänge vorhanden.",expenseLog:"KOSTENBUCH",expenseHeading:"Fahrzeugkosten",totalExpenses:"Gesamtkosten",expenseDate:"Datum",expenseCategory:"Kategorie",repair:"Reparatur",maintenance:"Wartung",parts:"Ersatzteile",tyres:"Reifen",insurance:"Versicherung",taxes:"Steuern und Gebühren",other:"Sonstiges",expenseDescription:"Beschreibung",expenseAmount:"Betrag (€)",expenseOdometer:"Kilometerstand (km)",saveExpense:"Kosten speichern",expenseHistory:"Kostenverlauf",emptyExpenses:"Noch keine Kosten erfasst.",deleteExpense:"Kosten löschen",confirmDeleteExpense:"Möchtest du diese Kosten wirklich löschen?"},
  pt: {eyebrow:"O TEU ASSISTENTE AUTOMÓVEL",heading:"Tudo sobre o teu carro. Num só lugar.",subtitle:"Acompanha facilmente os veículos, despesas e manutenção.",garage:"GARAGEM",yourCars:"Os teus veículos",addCar:"Adicionar veículo",limitNote:"A versão básica permite até 3 veículos.",newCar:"Novo veículo",editCar:"Editar veículo",make:"Marca",model:"Modelo",registration:"Matrícula",year:"Ano",saveCar:"Guardar veículo",updateCar:"Guardar alterações",edit:"Editar",footer:"O teu diário automóvel",empty:"Ainda não adicionaste veículos. Começa por adicionar o teu primeiro carro.",remove:"Eliminar veículo",confirmDelete:"Tens a certeza de que pretendes eliminar este veículo?",car:"Veículo",limitReached:"Atingiste o limite de 3 veículos.",unknownYear:"Ano não indicado.",back:"← Voltar à garagem",profile:"Perfil do veículo",engine:"Motor",fuel:"Combustível",power:"Potência",transmission:"Transmissão",vin:"Número VIN",mileage:"Quilometragem (km)",color:"Cor",notSet:"Não indicado",saveDetails:"Guardar dados",fuelLog:"REGISTO DE COMBUSTÍVEL",fuelHeading:"Combustível",average:"Consumo médio",date:"Data",fuelType:"Tipo de combustível",litres:"Litros",pricePerLitre:"Preço por litro (€)",totalAmount:"Valor total (€)",odometer:"Quilometragem (km)",fullTank:"Depósito cheio",saveFuel:"Guardar abastecimento",fuelHistory:"Histórico de abastecimentos",petrol:"Gasolina",diesel:"Gasóleo",lpg:"GPL",cng:"GNC",electricity:"Eletricidade",additionalData:"Dados técnicos adicionais",fuelConsumption:"Consumo",tapProfile:"Toca para ver o perfil →",invalidData:"Verifica os dados introduzidos.",mileageError:"A quilometragem não pode ser inferior ao último registo.",validYear:"Introduz um ano válido entre 1900 e 2100.",automatic:"Automático",emptyFuel:"Ainda não existem abastecimentos registados.",expenseLog:"REGISTO DE DESPESAS",expenseHeading:"Despesas do veículo",totalExpenses:"Despesas totais",expenseDate:"Data",expenseCategory:"Categoria",repair:"Reparação",maintenance:"Manutenção",parts:"Peças",tyres:"Pneus",insurance:"Seguro",taxes:"Impostos e taxas",other:"Outros",expenseDescription:"Descrição",expenseAmount:"Valor (€)",expenseOdometer:"Quilometragem (km)",saveExpense:"Guardar despesa",expenseHistory:"Histórico de despesas",emptyExpenses:"Ainda não existem despesas registadas.",deleteExpense:"Eliminar despesa",confirmDeleteExpense:"Tens a certeza de que pretendes eliminar esta despesa?"},
  ru: {eyebrow:"ТВОЙ АВТОМОБИЛЬНЫЙ ПОМОЩНИК",heading:"Всё об автомобиле. В одном месте.",subtitle:"Легко следи за автомобилями, расходами и обслуживанием.",garage:"ГАРАЖ",yourCars:"Твои автомобили",addCar:"Добавить автомобиль",limitNote:"Базовая версия поддерживает до 3 автомобилей.",newCar:"Новый автомобиль",editCar:"Редактировать автомобиль",make:"Марка",model:"Модель",registration:"Регистрационный номер",year:"Год",saveCar:"Сохранить автомобиль",updateCar:"Сохранить изменения",edit:"Изменить",footer:"Твой автомобильный журнал",empty:"Пока нет автомобилей. Добавь свой первый автомобиль.",remove:"Удалить автомобиль",confirmDelete:"Ты действительно хочешь удалить этот автомобиль?",car:"Автомобиль",limitReached:"Достигнут лимит в 3 автомобиля.",unknownYear:"Год не указан.",back:"← Назад в гараж",profile:"Профиль автомобиля",engine:"Двигатель",fuel:"Топливо",power:"Мощность",transmission:"Коробка передач",vin:"VIN-номер",mileage:"Пробег (км)",color:"Цвет",notSet:"Не указано",saveDetails:"Сохранить данные",fuelLog:"УЧЁТ ТОПЛИВА",fuelHeading:"Топливо",average:"Средний расход",date:"Дата",fuelType:"Тип топлива",litres:"Литры",pricePerLitre:"Цена за литр (€)",totalAmount:"Общая сумма (€)",odometer:"Пробег (км)",fullTank:"Полный бак",saveFuel:"Сохранить заправку",fuelHistory:"История заправок",petrol:"Бензин",diesel:"Дизель",lpg:"Сжиженный газ (LPG)",cng:"Метан (CNG)",electricity:"Электричество",additionalData:"Дополнительные технические данные",fuelConsumption:"Расход",tapProfile:"Нажми, чтобы открыть профиль →",invalidData:"Проверь введённые данные.",mileageError:"Пробег не может быть меньше последней записи.",validYear:"Введи корректный год от 1900 до 2100.",automatic:"Автоматически",emptyFuel:"Записей о заправках пока нет.",expenseLog:"УЧЁТ РАСХОДОВ",expenseHeading:"Расходы на автомобиль",totalExpenses:"Общие расходы",expenseDate:"Дата",expenseCategory:"Категория",repair:"Ремонт",maintenance:"Обслуживание",parts:"Запчасти",tyres:"Шины",insurance:"Страхование",taxes:"Налоги и сборы",other:"Другое",expenseDescription:"Описание",expenseAmount:"Сумма (€)",expenseOdometer:"Пробег (км)",saveExpense:"Сохранить расход",expenseHistory:"История расходов",emptyExpenses:"Расходы пока не записаны.",deleteExpense:"Удалить расход",confirmDeleteExpense:"Вы действительно хотите удалить этот расход?"}

};

const uiText = {
  bg:{navHome:"Начало",navVehicles:"Автомобили",navHistory:"История",navProfile:"Профил",homeTitle:"Твоят автомобилен помощник",homeEmpty:"Все още нямаш добавен автомобил.",homeCarCount:"Автомобили",homeExpenseTotal:"Записани разходи",homeVehicles:"Моите автомобили",homeAdd:"＋ Добави автомобил",homeNote:"Интелигентните напомняния и планът за поддръжка ще се добавят в следващите етапи.",historyTitle:"История",historyIntro:"Всички записани зареждания и разходи за твоите автомобили.",historyEmpty:"Все още няма записи за гориво или разходи.",historyFuel:"ЗАРЕЖДАНЕ",historyExpense:"РАЗХОД",appProfile:"Профил на приложението",languageSetting:"Език на приложението",languageHelp:"Използвай избора за език в горната част на екрана. Ma-car поддържа шест езика.",futureSettings:"Предстоящи настройки",futureHelp:"В следващите етапи ще добавим валута, мерни единици, известия и архивиране."},
  en:{navHome:"Home",navVehicles:"Vehicles",navHistory:"History",navProfile:"Profile",homeTitle:"Your car assistant",homeEmpty:"You have not added a vehicle yet.",homeCarCount:"Vehicles",homeExpenseTotal:"Recorded expenses",homeVehicles:"My vehicles",homeAdd:"＋ Add vehicle",homeNote:"Smart reminders and the maintenance plan will be added in upcoming stages.",historyTitle:"History",historyIntro:"All recorded fuel fills and expenses for your vehicles.",historyEmpty:"There are no fuel or expense records yet.",historyFuel:"FUEL",historyExpense:"EXPENSE",appProfile:"App profile",languageSetting:"App language",languageHelp:"Use the language selector at the top of the screen. Ma-car currently supports six languages.",futureSettings:"Upcoming settings",futureHelp:"Currency, units, notifications and backup will be added in upcoming stages."},
  es:{navHome:"Inicio",navVehicles:"Vehículos",navHistory:"Historial",navProfile:"Perfil",homeTitle:"Tu asistente para el coche",homeEmpty:"Todavía no has añadido ningún vehículo.",homeCarCount:"Vehículos",homeExpenseTotal:"Gastos registrados",homeVehicles:"Mis vehículos",homeAdd:"＋ Añadir vehículo",homeNote:"Los recordatorios inteligentes y el plan de mantenimiento se añadirán próximamente.",historyTitle:"Historial",historyIntro:"Todos los repostajes y gastos registrados de tus vehículos.",historyEmpty:"Todavía no hay registros de combustible ni gastos.",historyFuel:"REPOSTAJE",historyExpense:"GASTO",appProfile:"Perfil de la aplicación",languageSetting:"Idioma de la aplicación",languageHelp:"Usa el selector de idioma en la parte superior. Ma-car admite actualmente seis idiomas.",futureSettings:"Próximos ajustes",futureHelp:"La moneda, las unidades, las notificaciones y las copias de seguridad se añadirán próximamente."},
  de:{navHome:"Start",navVehicles:"Fahrzeuge",navHistory:"Verlauf",navProfile:"Profil",homeTitle:"Dein Auto-Assistent",homeEmpty:"Du hast noch kein Fahrzeug hinzugefügt.",homeCarCount:"Fahrzeuge",homeExpenseTotal:"Erfasste Kosten",homeVehicles:"Meine Fahrzeuge",homeAdd:"＋ Fahrzeug hinzufügen",homeNote:"Intelligente Erinnerungen und der Wartungsplan werden in späteren Schritten ergänzt.",historyTitle:"Verlauf",historyIntro:"Alle erfassten Tankvorgänge und Kosten deiner Fahrzeuge.",historyEmpty:"Noch keine Tank- oder Kosteneinträge vorhanden.",historyFuel:"TANKVORGANG",historyExpense:"AUSGABE",appProfile:"App-Profil",languageSetting:"App-Sprache",languageHelp:"Verwende die Sprachauswahl oben auf dem Bildschirm. Ma-car unterstützt derzeit sechs Sprachen.",futureSettings:"Weitere Einstellungen",futureHelp:"Währung, Einheiten, Benachrichtigungen und Datensicherung folgen in späteren Schritten."},
  pt:{navHome:"Início",navVehicles:"Veículos",navHistory:"Histórico",navProfile:"Perfil",homeTitle:"O teu assistente automóvel",homeEmpty:"Ainda não adicionaste nenhum veículo.",homeCarCount:"Veículos",homeExpenseTotal:"Despesas registadas",homeVehicles:"Os meus veículos",homeAdd:"＋ Adicionar veículo",homeNote:"Os lembretes inteligentes e o plano de manutenção serão adicionados nas próximas etapas.",historyTitle:"Histórico",historyIntro:"Todos os abastecimentos e despesas registados dos teus veículos.",historyEmpty:"Ainda não existem registos de combustível ou despesas.",historyFuel:"ABASTECIMENTO",historyExpense:"DESPESA",appProfile:"Perfil da aplicação",languageSetting:"Idioma da aplicação",languageHelp:"Utiliza o seletor de idioma no topo do ecrã. Ma-car suporta atualmente seis idiomas.",futureSettings:"Próximas definições",futureHelp:"Moeda, unidades, notificações e cópias de segurança serão adicionadas mais tarde."},
  ru:{navHome:"Главная",navVehicles:"Автомобили",navHistory:"История",navProfile:"Профиль",homeTitle:"Твой автомобильный помощник",homeEmpty:"Ты ещё не добавил автомобиль.",homeCarCount:"Автомобили",homeExpenseTotal:"Записанные расходы",homeVehicles:"Мои автомобили",homeAdd:"＋ Добавить автомобиль",homeNote:"Умные напоминания и план обслуживания будут добавлены на следующих этапах.",historyTitle:"История",historyIntro:"Все записи о заправках и расходах твоих автомобилей.",historyEmpty:"Записей о топливе и расходах пока нет.",historyFuel:"ЗАПРАВКА",historyExpense:"РАСХОД",appProfile:"Профиль приложения",languageSetting:"Язык приложения",languageHelp:"Используй выбор языка в верхней части экрана. Сейчас Ma-car поддерживает шесть языков.",futureSettings:"Будущие настройки",futureHelp:"Валюта, единицы измерения, уведомления и резервное копирование будут добавлены позже."}
};


const serviceText = {
  bg:{title:"Поддръжка и сервиз",intro:"Записвай извършеното обслужване и следващия срок според сервизната книжка или указанията на производителя.",date:"Дата",type:"Дейност",odometer:"Пробег при обслужване (км)",cost:"Цена (€)",description:"Описание / използвани части",nextService:"Следващо обслужване (по сервизната книжка)",nextDate:"Следваща дата",nextKm:"Следващ пробег (км)",save:"Запиши обслужването",history:"История на обслужването",empty:"Все още няма записано обслужване.",included:"Цената на обслужването се включва в общите разходи.",assistant:"Следваща поддръжка",noPlan:"Няма зададен следващ срок. Въведи го според сервизната книжка или указанията на производителя.",planned:"Планирано",due:"Срокът е достигнат според въведените данни",record:"Обслужване",delete:"Изтрий",confirmDelete:"Да изтрия ли този запис за обслужване?",oil:"Масло",filters:"Филтри",brakes:"Спирачна система",tyres:"Гуми",battery:"Акумулатор",belts:"Ремъци / верига",general:"Общо обслужване",other:"Друго"},
  en:{title:"Maintenance & service",intro:"Record completed work and the next due point from the service book or manufacturer guidance.",date:"Date",type:"Service item",odometer:"Odometer at service (km)",cost:"Cost (€)",description:"Description / parts used",nextService:"Next service (from service book)",nextDate:"Next date",nextKm:"Next mileage (km)",save:"Save service record",history:"Service history",empty:"No service records yet.",included:"Service costs are included in total expenses.",assistant:"Next maintenance",noPlan:"No next due point set. Enter it from the service book or manufacturer guidance.",planned:"Planned",due:"Due based on the information entered",record:"Service",delete:"Delete",confirmDelete:"Delete this service record?",oil:"Oil",filters:"Filters",brakes:"Braking system",tyres:"Tyres",battery:"Battery",belts:"Belts / chain",general:"General service",other:"Other"},
  es:{title:"Mantenimiento y servicio",intro:"Registra los trabajos realizados y el próximo vencimiento según el libro de mantenimiento o el fabricante.",date:"Fecha",type:"Trabajo",odometer:"Kilometraje del servicio (km)",cost:"Coste (€)",description:"Descripción / piezas utilizadas",nextService:"Próximo servicio (según el libro)",nextDate:"Próxima fecha",nextKm:"Próximo kilometraje (km)",save:"Guardar servicio",history:"Historial de mantenimiento",empty:"Todavía no hay servicios registrados.",included:"El coste del servicio se incluye en los gastos totales.",assistant:"Próximo mantenimiento",noPlan:"No hay un próximo vencimiento. Añádelo según el libro de mantenimiento o el fabricante.",planned:"Planificado",due:"Vencido según los datos introducidos",record:"Servicio",delete:"Eliminar",confirmDelete:"¿Eliminar este registro de servicio?",oil:"Aceite",filters:"Filtros",brakes:"Sistema de frenos",tyres:"Neumáticos",battery:"Batería",belts:"Correas / cadena",general:"Mantenimiento general",other:"Otro"},
  de:{title:"Wartung & Service",intro:"Erfasse erledigte Arbeiten und den nächsten Termin laut Serviceheft oder Herstellerangaben.",date:"Datum",type:"Arbeit",odometer:"Kilometerstand beim Service (km)",cost:"Kosten (€)",description:"Beschreibung / verwendete Teile",nextService:"Nächster Service (laut Serviceheft)",nextDate:"Nächstes Datum",nextKm:"Nächster Kilometerstand (km)",save:"Service speichern",history:"Serviceverlauf",empty:"Noch keine Serviceeinträge vorhanden.",included:"Servicekosten werden in die Gesamtausgaben eingerechnet.",assistant:"Nächste Wartung",noPlan:"Kein nächster Termin festgelegt. Bitte laut Serviceheft oder Herstellerangaben eintragen.",planned:"Geplant",due:"Laut eingegebenen Daten fällig",record:"Service",delete:"Löschen",confirmDelete:"Diesen Serviceeintrag löschen?",oil:"Öl",filters:"Filter",brakes:"Bremsanlage",tyres:"Reifen",battery:"Batterie",belts:"Riemen / Kette",general:"Allgemeine Wartung",other:"Sonstiges"},
  pt:{title:"Manutenção e serviço",intro:"Regista os trabalhos realizados e o próximo prazo indicado no livro de manutenção ou pelo fabricante.",date:"Data",type:"Trabalho",odometer:"Quilometragem na revisão (km)",cost:"Custo (€)",description:"Descrição / peças utilizadas",nextService:"Próxima revisão (segundo o livro)",nextDate:"Próxima data",nextKm:"Próxima quilometragem (km)",save:"Guardar revisão",history:"Histórico de manutenção",empty:"Ainda não existem revisões registadas.",included:"O custo da revisão é incluído nas despesas totais.",assistant:"Próxima manutenção",noPlan:"Não existe um próximo prazo definido. Introduz os dados do livro de manutenção ou do fabricante.",planned:"Planeado",due:"Prazo atingido segundo os dados introduzidos",record:"Revisão",delete:"Eliminar",confirmDelete:"Eliminar este registo de revisão?",oil:"Óleo",filters:"Filtros",brakes:"Sistema de travagem",tyres:"Pneus",battery:"Bateria",belts:"Correias / corrente",general:"Manutenção geral",other:"Outro"},
  ru:{title:"Обслуживание и сервис",intro:"Записывай выполненные работы и следующий срок по сервисной книжке или рекомендациям производителя.",date:"Дата",type:"Работа",odometer:"Пробег при обслуживании (км)",cost:"Стоимость (€)",description:"Описание / использованные детали",nextService:"Следующее обслуживание (по сервисной книжке)",nextDate:"Следующая дата",nextKm:"Следующий пробег (км)",save:"Сохранить обслуживание",history:"История обслуживания",empty:"Записей об обслуживании пока нет.",included:"Стоимость обслуживания включается в общие расходы.",assistant:"Следующее обслуживание",noPlan:"Следующий срок не задан. Укажи его по сервисной книжке или рекомендациям производителя.",planned:"Запланировано",due:"Срок наступил согласно введённым данным",record:"Обслуживание",delete:"Удалить",confirmDelete:"Удалить эту запись об обслуживании?",oil:"Масло",filters:"Фильтры",brakes:"Тормозная система",tyres:"Шины",battery:"Аккумулятор",belts:"Ремни / цепь",general:"Общее обслуживание",other:"Другое"}
};
function st(key){return serviceText[language]?.[key]||serviceText.en[key]||key;}

const serviceActivityNames={
 bg:{oil:"Масло и маслен филтър",filters:"Въздушен / горивен / купе филтър",brakes:"Спирачна система",tyres:"Гуми и сезонна смяна",battery:"Акумулатор",belts:"Ремъци / ангренажна верига",general:"Периодично обслужване",diagnostics:"Компютърна диагностика",sparkPlugs:"Свещи",coolant:"Охладителна течност",transmission:"Скоростна кутия",suspension:"Окачване и амортисьори",exhaust:"Изпускателна система",airConditioning:"Климатик",alignment:"Реглаж на ходова част",tyreRotation:"Ротация и баланс на гуми",inspection:"ГТП / технически преглед",repair:"Ремонт",roadside:"Пътна помощ",wash:"Измиване и детайлинг",other:"Друга дейност"},
 en:{oil:"Oil and oil filter",filters:"Air / fuel / cabin filters",brakes:"Braking system",tyres:"Tyres and seasonal change",battery:"Battery",belts:"Belts / timing chain",general:"Scheduled maintenance",diagnostics:"Computer diagnostics",sparkPlugs:"Spark plugs",coolant:"Coolant",transmission:"Transmission",suspension:"Suspension and shock absorbers",exhaust:"Exhaust system",airConditioning:"Air conditioning",alignment:"Wheel alignment",tyreRotation:"Tyre rotation and balancing",inspection:"MOT / vehicle inspection",repair:"Repair",roadside:"Roadside assistance",wash:"Wash and detailing",other:"Other activity"},
 es:{oil:"Aceite y filtro",filters:"Filtros de aire / combustible / habitáculo",brakes:"Sistema de frenos",tyres:"Neumáticos y cambio estacional",battery:"Batería",belts:"Correas / cadena de distribución",general:"Mantenimiento periódico",diagnostics:"Diagnóstico electrónico",sparkPlugs:"Bujías",coolant:"Refrigerante",transmission:"Transmisión",suspension:"Suspensión y amortiguadores",exhaust:"Sistema de escape",airConditioning:"Aire acondicionado",alignment:"Alineación",tyreRotation:"Rotación y equilibrado de neumáticos",inspection:"ITV / inspección técnica",repair:"Reparación",roadside:"Asistencia en carretera",wash:"Lavado y detallado",other:"Otra actividad"},
 de:{oil:"Öl und Ölfilter",filters:"Luft- / Kraftstoff- / Innenraumfilter",brakes:"Bremsanlage",tyres:"Reifen und Saisonwechsel",battery:"Batterie",belts:"Riemen / Steuerkette",general:"Regelmäßige Wartung",diagnostics:"Fahrzeugdiagnose",sparkPlugs:"Zündkerzen",coolant:"Kühlmittel",transmission:"Getriebe",suspension:"Fahrwerk und Stoßdämpfer",exhaust:"Abgasanlage",airConditioning:"Klimaanlage",alignment:"Achsvermessung",tyreRotation:"Reifenwechsel und Auswuchten",inspection:"HU / Fahrzeugprüfung",repair:"Reparatur",roadside:"Pannenhilfe",wash:"Wäsche und Aufbereitung",other:"Sonstige Tätigkeit"},
 pt:{oil:"Óleo e filtro de óleo",filters:"Filtros de ar / combustível / habitáculo",brakes:"Sistema de travagem",tyres:"Pneus e mudança sazonal",battery:"Bateria",belts:"Correias / corrente de distribuição",general:"Manutenção periódica",diagnostics:"Diagnóstico eletrónico",sparkPlugs:"Velas",coolant:"Líquido de refrigeração",transmission:"Transmissão",suspension:"Suspensão e amortecedores",exhaust:"Sistema de escape",airConditioning:"Ar condicionado",alignment:"Alinhamento",tyreRotation:"Rotação e equilíbrio dos pneus",inspection:"Inspeção técnica / MOT",repair:"Reparação",roadside:"Assistência em viagem",wash:"Lavagem e detalhe",other:"Outra atividade"},
 ru:{oil:"Масло и масляный фильтр",filters:"Воздушный / топливный / салонный фильтр",brakes:"Тормозная система",tyres:"Шины и сезонная замена",battery:"Аккумулятор",belts:"Ремни / цепь ГРМ",general:"Плановое обслуживание",diagnostics:"Компьютерная диагностика",sparkPlugs:"Свечи зажигания",coolant:"Охлаждающая жидкость",transmission:"Коробка передач",suspension:"Подвеска и амортизаторы",exhaust:"Выхлопная система",airConditioning:"Кондиционер",alignment:"Развал-схождение",tyreRotation:"Ротация и балансировка шин",inspection:"Техосмотр / MOT",repair:"Ремонт",roadside:"Помощь на дороге",wash:"Мойка и детейлинг",other:"Другая работа"}
};
const expenseCategoryNames={
 bg:{repair:"Ремонт",maintenance:"Обслужване",parts:"Части",tyres:"Гуми",insurance:"Застраховка",taxes:"Данъци и такси",parking:"Паркинг",tolls:"Пътни такси",washing:"Автомивка",roadside:"Пътна помощ",fines:"Глоби",accessories:"Аксесоари",other:"Други"},
 en:{repair:"Repairs",maintenance:"Maintenance",parts:"Parts",tyres:"Tyres",insurance:"Insurance",taxes:"Tax and fees",parking:"Parking",tolls:"Tolls",washing:"Car wash",roadside:"Roadside assistance",fines:"Fines",accessories:"Accessories",other:"Other"},
 es:{repair:"Reparaciones",maintenance:"Mantenimiento",parts:"Piezas",tyres:"Neumáticos",insurance:"Seguro",taxes:"Impuestos y tasas",parking:"Aparcamiento",tolls:"Peajes",washing:"Lavado",roadside:"Asistencia en carretera",fines:"Multas",accessories:"Accesorios",other:"Otros"},
 de:{repair:"Reparaturen",maintenance:"Wartung",parts:"Teile",tyres:"Reifen",insurance:"Versicherung",taxes:"Steuern und Gebühren",parking:"Parken",tolls:"Maut",washing:"Autowäsche",roadside:"Pannenhilfe",fines:"Bußgelder",accessories:"Zubehör",other:"Sonstiges"},
 pt:{repair:"Reparações",maintenance:"Manutenção",parts:"Peças",tyres:"Pneus",insurance:"Seguro",taxes:"Impostos e taxas",parking:"Estacionamento",tolls:"Portagens",washing:"Lavagem",roadside:"Assistência em viagem",fines:"Multas",accessories:"Acessórios",other:"Outros"},
 ru:{repair:"Ремонт",maintenance:"Обслуживание",parts:"Запчасти",tyres:"Шины",insurance:"Страховка",taxes:"Налоги и сборы",parking:"Парковка",tolls:"Платные дороги",washing:"Мойка",roadside:"Помощь на дороге",fines:"Штрафы",accessories:"Аксессуары",other:"Другое"}
};
function serviceActivityLabel(type){return serviceActivityNames[language]?.[type]||serviceActivityNames.en[type]||st(type);}
function expenseCategoryLabel(type){return expenseCategoryNames[language]?.[type]||expenseCategoryNames.en[type]||t("other");}
const serviceActivityTypes=["oil","filters","brakes","tyres","battery","belts","general","diagnostics","sparkPlugs","coolant","transmission","suspension","exhaust","airConditioning","alignment","tyreRotation","inspection","repair","roadside","wash","other"];
const expenseCategoryTypes=["repair","maintenance","parts","tyres","insurance","taxes","parking","tolls","washing","roadside","fines","accessories","other"];
function renderExpenseOptions(){const select=$("#expenseCategory"),current=select.value;select.innerHTML=expenseCategoryTypes.map(type=>'<option value="'+type+'">'+escapeHtml(expenseCategoryLabel(type))+'</option>').join("");select.value=expenseCategoryTypes.includes(current)?current:"other";}

const documentText={
 bg:{casco:"Каско",title:"Документи и срокове",intro:"Въведи датата на валидност. Ще виждаш предупреждение 30, 15 и 7 дни предварително.",insurance:"Застраховка",tax:"Данък МПС",vignette:"Винетка",inspection:"ГТП / MOT",expiry:"Валидна до",reference:"Номер / бележка",save:"Запази сроковете",notify:"Разреши известия",permission:"Известията се показват, когато приложението е отворено или бъде отворено отново.",expired:"Изтекъл срок",today:"Изтича днес",days:"Остават {n} дни",missing:"Не е въведена дата",saved:"Сроковете са запазени.",permissionGranted:"Известията са разрешени.",permissionDenied:"Известията не са разрешени от браузъра."},
 en:{casco:"Comprehensive insurance",title:"Documents & expiry dates",intro:"Enter each expiry date. Get alerts 30, 15 and 7 days beforehand.",insurance:"Insurance",tax:"Vehicle tax",vignette:"Road vignette",inspection:"Inspection / MOT",expiry:"Valid until",reference:"Reference / note",save:"Save dates",notify:"Enable notifications",permission:"Notifications appear while the app is open or when you open it again.",expired:"Expired",today:"Expires today",days:"{n} days left",missing:"No date entered",saved:"Expiry dates saved.",permissionGranted:"Notifications are enabled.",permissionDenied:"Notifications are blocked by the browser."},
 es:{casco:"Seguro a todo riesgo",title:"Documentos y vencimientos",intro:"Introduce cada fecha de caducidad. Recibe avisos 30, 15 y 7 días antes.",insurance:"Seguro",tax:"Impuesto del vehículo",vignette:"Viñeta",inspection:"Inspección técnica / ITV",expiry:"Válido hasta",reference:"Referencia / nota",save:"Guardar fechas",notify:"Activar notificaciones",permission:"Los avisos aparecen mientras la aplicación está abierta o al volver a abrirla.",expired:"Caducado",today:"Caduca hoy",days:"Quedan {n} días",missing:"Sin fecha",saved:"Fechas guardadas.",permissionGranted:"Notificaciones activadas.",permissionDenied:"El navegador ha bloqueado las notificaciones."},
 de:{casco:"Vollkaskoversicherung",title:"Dokumente und Ablaufdaten",intro:"Trage jedes Ablaufdatum ein. Erinnerungen 30, 15 und 7 Tage vorher.",insurance:"Versicherung",tax:"Kfz-Steuer",vignette:"Vignette",inspection:"HU / MOT",expiry:"Gültig bis",reference:"Referenz / Notiz",save:"Daten speichern",notify:"Benachrichtigungen aktivieren",permission:"Hinweise erscheinen, solange die App geöffnet ist oder erneut geöffnet wird.",expired:"Abgelaufen",today:"Läuft heute ab",days:"Noch {n} Tage",missing:"Kein Datum eingetragen",saved:"Ablaufdaten gespeichert.",permissionGranted:"Benachrichtigungen aktiviert.",permissionDenied:"Benachrichtigungen sind im Browser blockiert."},
 pt:{casco:"Seguro contra todos os riscos",title:"Documentos e validade",intro:"Introduz cada data de validade. Recebe avisos 30, 15 e 7 dias antes.",insurance:"Seguro",tax:"Imposto do veículo",vignette:"Vinheta",inspection:"Inspeção / MOT",expiry:"Válido até",reference:"Referência / nota",save:"Guardar datas",notify:"Ativar notificações",permission:"Os avisos aparecem enquanto a aplicação está aberta ou quando a abres novamente.",expired:"Expirado",today:"Expira hoje",days:"Faltam {n} dias",missing:"Sem data",saved:"Datas guardadas.",permissionGranted:"Notificações ativadas.",permissionDenied:"O navegador bloqueou as notificações."},
 ru:{casco:"КАСКО",title:"Документы и сроки",intro:"Укажи даты окончания действия. Напоминания за 30, 15 и 7 дней.",insurance:"Страховка",tax:"Транспортный налог",vignette:"Виньетка",inspection:"Техосмотр / MOT",expiry:"Действует до",reference:"Номер / примечание",save:"Сохранить даты",notify:"Включить уведомления",permission:"Уведомления появляются, когда приложение открыто или открывается снова.",expired:"Срок истёк",today:"Истекает сегодня",days:"Осталось {n} дн.",missing:"Дата не указана",saved:"Сроки сохранены.",permissionGranted:"Уведомления включены.",permissionDenied:"Браузер заблокировал уведомления."}
};
function dt(key){return documentText[language]?.[key]||documentText.en[key]||key;}
const documentTypes=["insurance","casco","tax","vignette","inspection"];
function ensureDocuments(car){if(!car.documents||typeof car.documents!=="object")car.documents={};documentTypes.forEach(type=>{if(!car.documents[type])car.documents[type]={expiryDate:"",reference:""};});return car.documents;}
function documentDays(date){if(!date)return null;const now=new Date();now.setHours(0,0,0,0);const due=new Date(date+"T00:00:00");return Math.ceil((due-now)/86400000);}
function documentStatus(date){const days=documentDays(date);if(days===null)return dt("missing");if(days<0)return dt("expired");if(days===0)return dt("today");return dt("days").replace("{n}",days);}
function renderDocuments(car){
 const docs=ensureDocuments(car);
 $("#documentSectionTitle").textContent=dt("title");$("#documentIntro").textContent=dt("intro");$("#documentSave").textContent=dt("save");$("#documentNotify").textContent=dt("notify");$("#documentPermissionHelp").textContent=dt("permission");
 documentTypes.forEach(type=>{const heading=$("#doc-"+type+"-heading"),expiry=$("#doc-"+type+"-expiry-label"),reference=$("#doc-"+type+"-reference-label");if(heading)heading.textContent=dt(type);if(expiry)expiry.textContent=dt("expiry");if(reference)reference.textContent=dt("reference");});
 documentTypes.forEach(type=>{const date=$("#doc-"+type+"-date"),ref=$("#doc-"+type+"-reference"),status=$("#doc-"+type+"-status");if(date&&document.activeElement!==date)date.value=docs[type].expiryDate||"";if(ref&&document.activeElement!==ref)ref.value=docs[type].reference||"";if(status){status.textContent=documentStatus(docs[type].expiryDate);const days=documentDays(docs[type].expiryDate);status.dataset.state=days===null?"missing":days<0?"expired":days<=30?"warning":"ok";}});
}
function checkDocumentNotifications(){
 if(!("Notification" in window)||Notification.permission!=="granted")return;
 let sent={};try{sent=JSON.parse(localStorage.getItem("my-car-document-alerts-v1")||"{}")||{};}catch{}
 let changed=false;
 vehicles.forEach(car=>documentTypes.forEach(type=>{
  const doc=ensureDocuments(car)[type],days=documentDays(doc.expiryDate);if(days===null)return;
  [30,15,7].forEach(mark=>{
   const key=[car.id,type,doc.expiryDate,mark].join("|");
   if(days<=mark&&days>(mark===30?15:mark===15?7:0)&&!sent[key]){
    new Notification("Ma-car · "+dt(type),{body:car.make+" "+car.model+": "+dt("days").replace("{n}",days)});
    sent[key]=true;changed=true;
   }
  });
 }));
 vehicles.forEach(car=>documentTypes.forEach(type=>{
  const doc=ensureDocuments(car)[type],days=documentDays(doc.expiryDate);if(days===null||days>0)return;
  const key=[car.id,type,doc.expiryDate,days===0?"today":"expired"].join("|");
  if(!sent[key]){
   new Notification("Ma-car · "+dt(type),{body:car.make+" "+car.model+": "+(days===0?dt("today"):dt("expired"))});
   sent[key]=true;changed=true;
  }
 }));
 if(changed)localStorage.setItem("my-car-document-alerts-v1",JSON.stringify(sent));
}

const languageNames = {bg:"🇧🇬 Български",en:"🇬🇧 English",es:"🇪🇸 Español",de:"🇩🇪 Deutsch",pt:"🇵🇹 Português",ru:"🇷🇺 Русский"};
let language = localStorage.getItem("my-car-language") || (translations[navigator.language?.toLowerCase()] ? navigator.language.toLowerCase() : (translations[navigator.language?.slice(0,2)] ? navigator.language.slice(0,2) : "en"));
let vehicles = loadVehicles();
let editingVehicleId = null;
let selectedVehicleId = null;
const $ = (selector) => document.querySelector(selector);
function t(key){return translations[language]?.[key] || uiText[language]?.[key] || translations.en[key] || uiText.en[key] || key;}
function locale(){return ({bg:"bg-BG",en:"en-GB",es:"es-ES",de:"de-DE",pt:"pt-PT",ru:"ru-RU"})[language]||"en-GB";}
function renderLanguageOptions(){const select=$("#languageSelect");select.innerHTML=Object.keys(translations).map(code=>'<option value="'+escapeHtml(code)+'">'+escapeHtml(languageNames[code]||code.toUpperCase())+'</option>').join("");select.value=language;}
function renderFuelOptions(){const select=$("#fuelType"),current=select.value;const types=[["petrol","petrol"],["diesel","diesel"],["lpg","lpg"],["cng","cng"],["electricity","electricity"]];select.innerHTML=types.map(([value,key])=>`<option value="${value}">${t(key)}</option>`).join("");select.value=types.some(([value])=>value===current)?current:"petrol";}
function createDemoVehicles(){
 return [
  {id:"demo-toyota",make:"Toyota",model:"Corolla 1.6",registration:"CB 1234 AB",year:"2018",engine:"1.6 бензин",fuel:"Бензин",power:"97 kW / 132 hp",transmission:"Ръчна",vin:"DEMO0000000000001",mileage:"125500",color:"Сребрист",
   fuelLog:[
    {id:"toy-f1",date:"2026-10-03",fuelType:"petrol",litres:40,pricePerLitre:1.32,total:52.8,odometer:124000,fullTank:true},
    {id:"toy-f2",date:"2026-10-12",fuelType:"petrol",litres:20,pricePerLitre:1.34,total:26.8,odometer:124250,fullTank:false},
    {id:"toy-f3",date:"2026-10-22",fuelType:"petrol",litres:25,pricePerLitre:1.35,total:33.75,odometer:124500,fullTank:true},
    {id:"toy-f4",date:"2026-10-30",fuelType:"petrol",litres:32,pricePerLitre:1.36,total:43.52,odometer:124920,fullTank:true}
   ],
   expenses:[
    {id:"toy-e3",date:"2026-10-25",category:"insurance",description:"Гражданска отговорност – вноска",amount:72,odometer:"124650"},
    {id:"toy-e4",date:"2026-10-27",category:"parking",description:"Градски паркинг",amount:8,odometer:"124700"},
    {id:"toy-e5",date:"2026-10-29",category:"washing",description:"Автомивка",amount:12,odometer:"124850"},
    {id:"toy-e6",date:"2026-10-31",category:"tolls",description:"Пътни такси",amount:6.5,odometer:"125100"}
   ],
   serviceLog:[
    {id:"toy-s1",date:"2026-08-12",type:"oil",odometer:121000,description:"Масло 5W-30 и маслен филтър",cost:95,nextDueDate:"2027-02-12",nextDueOdometer:131000},
    {id:"toy-s2",date:"2026-08-12",type:"filters",odometer:121000,description:"Въздушен и купе филтър",cost:38.5},
    {id:"toy-s3",date:"2026-06-20",type:"brakes",odometer:119500,description:"Предни накладки и проверка на дискове",cost:145},
    {id:"toy-s4",date:"2026-04-18",type:"tyres",odometer:116000,description:"Летни гуми – монтаж и баланс",cost:280},
    {id:"toy-s5",date:"2026-03-10",type:"battery",odometer:114200,description:"Проверка и тест на акумулатора",cost:0},
    {id:"toy-s6",date:"2026-02-05",type:"diagnostics",odometer:112500,description:"Компютърна диагностика – без записани грешки",cost:25}
   ],
   documents:{
    insurance:{expiryDate:"2027-03-15",reference:"DEMO-GO-TOY-001"},
    casco:{expiryDate:"2027-03-15",reference:"DEMO-CASCO-TOY-001"},
    tax:{expiryDate:"2027-06-30",reference:"DEMO-TAX-TOY-001"},
    vignette:{expiryDate:"2027-01-31",reference:"DEMO-VIG-TOY-001"},
    inspection:{expiryDate:"2027-02-20",reference:"DEMO-GTP-TOY-001"}
   }},
  {id:"demo-vw",make:"Volkswagen",model:"Passat 2.0 TDI",registration:"CA 5678 KT",year:"2020",engine:"2.0 дизел",fuel:"Дизел",power:"110 kW / 150 hp",transmission:"Автоматична DSG",vin:"DEMO0000000000002",mileage:"98500",color:"Тъмносин",
   fuelLog:[
    {id:"vw-f1",date:"2026-10-02",fuelType:"diesel",litres:50,pricePerLitre:1.38,total:69,odometer:97000,fullTank:true},
    {id:"vw-f2",date:"2026-10-11",fuelType:"diesel",litres:18,pricePerLitre:1.4,total:25.2,odometer:97300,fullTank:false},
    {id:"vw-f3",date:"2026-10-20",fuelType:"diesel",litres:27,pricePerLitre:1.41,total:38.07,odometer:97600,fullTank:true},
    {id:"vw-f4",date:"2026-10-29",fuelType:"diesel",litres:42,pricePerLitre:1.42,total:59.64,odometer:98150,fullTank:true}
   ],
   expenses:[
    {id:"vw-e2",date:"2026-10-16",category:"tyres",description:"Два нови зимни гуми",amount:210,odometer:"97420"},
    {id:"vw-e3",date:"2026-10-27",category:"taxes",description:"Годишен данък МПС",amount:86.4,odometer:"98000"},
    {id:"vw-e4",date:"2026-10-28",category:"parking",description:"Паркинг при пътуване",amount:14,odometer:"98050"},
    {id:"vw-e5",date:"2026-10-30",category:"roadside",description:"Проверка на пътна помощ – тестов запис",amount:0,odometer:"98200"},
    {id:"vw-e6",date:"2026-10-31",category:"tolls",description:"Магистрални такси",amount:11.2,odometer:"98300"}
   ],
   serviceLog:[
    {id:"vw-s1",date:"2026-09-15",type:"oil",odometer:96500,description:"Масло по спецификация VW и маслен филтър",cost:165,nextDueDate:"2027-03-15",nextDueOdometer:111500},
    {id:"vw-s2",date:"2026-09-15",type:"filters",odometer:96500,description:"Горивен, въздушен и купе филтър",cost:82},
    {id:"vw-s3",date:"2026-07-10",type:"transmission",odometer:94200,description:"Проверка на DSG и обслужване по график",cost:240},
    {id:"vw-s4",date:"2026-05-22",type:"brakes",odometer:92100,description:"Предни накладки и спирачна течност",cost:190},
    {id:"vw-s5",date:"2026-04-12",type:"suspension",odometer:90800,description:"Проверка на предно окачване",cost:45},
    {id:"vw-s6",date:"2026-02-18",type:"diagnostics",odometer:88700,description:"Диагностика на двигателя и DPF",cost:35}
   ],
   documents:{
    insurance:{expiryDate:"2027-01-20",reference:"DEMO-GO-VW-001"},
    casco:{expiryDate:"2027-01-20",reference:"DEMO-CASCO-VW-001"},
    tax:{expiryDate:"2027-03-31",reference:"DEMO-TAX-VW-001"},
    vignette:{expiryDate:"2027-02-28",reference:"DEMO-VIG-VW-001"},
    inspection:{expiryDate:"2027-05-10",reference:"DEMO-MOT-VW-001"}
   }},
  {id:"demo-dacia",make:"Dacia",model:"Duster 1.6 LPG",registration:"PB 9012 MH",year:"2019",engine:"1.6 бензин / LPG",fuel:"LPG",power:"84 kW / 114 hp",transmission:"Ръчна",vin:"DEMO0000000000003",mileage:"76400",color:"Бял",
   fuelLog:[
    {id:"dac-f1",date:"2026-10-04",fuelType:"lpg",litres:38,pricePerLitre:0.68,total:25.84,odometer:75000,fullTank:true},
    {id:"dac-f2",date:"2026-10-13",fuelType:"lpg",litres:20,pricePerLitre:0.69,total:13.8,odometer:75300,fullTank:false},
    {id:"dac-f3",date:"2026-10-23",fuelType:"lpg",litres:22,pricePerLitre:0.7,total:15.4,odometer:75600,fullTank:true},
    {id:"dac-f4",date:"2026-10-31",fuelType:"lpg",litres:35,pricePerLitre:0.71,total:24.85,odometer:76200,fullTank:true}
   ],
   expenses:[
    {id:"dac-e1",date:"2026-10-08",category:"washing",description:"Автомивка и почистване на салона",amount:24,odometer:"75120"},
    {id:"dac-e2",date:"2026-10-18",category:"maintenance",description:"Реглаж на преден мост",amount:42,odometer:"75480"},
    {id:"dac-e3",date:"2026-10-21",category:"parts",description:"Филтър за газова уредба",amount:32,odometer:"75600"},
    {id:"dac-e4",date:"2026-10-24",category:"parking",description:"Паркинг",amount:5,odometer:"75800"},
    {id:"dac-e5",date:"2026-10-28",category:"tolls",description:"Пътни такси",amount:7.5,odometer:"76050"},
    {id:"dac-e6",date:"2026-10-30",category:"accessories",description:"Стелки за купето",amount:29,odometer:"76200"}
   ],
   serviceLog:[
    {id:"dac-s1",date:"2026-08-22",type:"oil",odometer:73500,description:"Масло 5W-40 и маслен филтър",cost:88,nextDueDate:"2027-02-22",nextDueOdometer:83500},
    {id:"dac-s2",date:"2026-08-22",type:"filters",odometer:73500,description:"Въздушен и купе филтър",cost:35},
    {id:"dac-s3",date:"2026-07-14",type:"coolant",odometer:72100,description:"Проверка на охладителна течност",cost:18},
    {id:"dac-s4",date:"2026-05-17",type:"tyres",odometer:70000,description:"Смяна на гуми и баланс",cost:48},
    {id:"dac-s5",date:"2026-04-09",type:"airConditioning",odometer:68600,description:"Почистване и зареждане на климатик",cost:65},
    {id:"dac-s6",date:"2026-02-12",type:"diagnostics",odometer:66800,description:"Диагностика на бензинова и LPG система",cost:30}
   ],
   documents:{
    insurance:{expiryDate:"2027-04-10",reference:"DEMO-GO-DAC-001"},
    casco:{expiryDate:"2027-04-10",reference:"DEMO-CASCO-DAC-001"},
    tax:{expiryDate:"2027-05-31",reference:"DEMO-TAX-DAC-001"},
    vignette:{expiryDate:"2027-03-31",reference:"DEMO-VIG-DAC-001"},
    inspection:{expiryDate:"2027-04-25",reference:"DEMO-GTP-DAC-001"}
   }}
 ];
}
function loadVehicles(){
 const key=DEMO_MODE?DEMO_STORAGE_KEY:STORAGE_KEY;
 try{const saved=JSON.parse(localStorage.getItem(key)||"null");if(Array.isArray(saved)&&(!DEMO_MODE||saved.length>0))return saved;}catch{}
 if(DEMO_MODE){const samples=createDemoVehicles();localStorage.setItem(DEMO_STORAGE_KEY,JSON.stringify(samples));return samples;}
 try{const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");return Array.isArray(data)?data:[];}catch{return [];}
}
function saveVehicles(){localStorage.setItem(DEMO_MODE?DEMO_STORAGE_KEY:STORAGE_KEY,JSON.stringify(vehicles));}
function escapeHtml(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}

let currentView = "home";
function showView(view){
  currentView=view;
  ["homeSection","garageSection","historySection","appProfileSection","carProfileSection","carFormSection"].forEach(id=>{
    const el=document.getElementById(id);if(el)el.hidden=true;
  });
  const target=document.getElementById(view==="vehicles"?"garageSection":view==="history"?"historySection":view==="profile"?"appProfileSection":"homeSection");
  if(target)target.hidden=false;
  document.querySelectorAll(".nav-button").forEach(button=>{
    const active=button.dataset.view===view;button.classList.toggle("active",active);
    if(active)button.setAttribute("aria-current","page");else button.removeAttribute("aria-current");
  });
  if(view==="home")renderHome();
  if(view==="history")renderHistory();
}
function renderHome(){
  const summary=$("#homeVehicleSummary"),stats=$("#homeStats");
  if(!summary||!stats)return;
  const car=vehicles[0];
  summary.innerHTML=car
    ? '<h3>'+escapeHtml(car.make)+' '+escapeHtml(car.model)+'</h3><p>'+(car.year?escapeHtml(car.year):t("unknownYear"))+' · '+escapeHtml(car.mileage||t("notSet"))+' km</p><span class="home-registration">'+escapeHtml((car.registration||"").toUpperCase())+'</span>'
    : '<h3>'+t("homeTitle")+'</h3><p>'+t("homeEmpty")+'</p>';
  const total=vehicles.reduce((sum,item)=>sum+(item.expenses||[]).reduce((part,entry)=>part+(Number(entry.amount)||0),0)+(item.serviceLog||[]).reduce((part,entry)=>part+(Number(entry.cost)||0),0),0);
  stats.innerHTML='<div class="home-stat"><small>'+t("homeCarCount")+'</small><strong>'+vehicles.length+' / 3</strong></div><div class="home-stat"><small>'+t("homeExpenseTotal")+'</small><strong>'+formatMoney(total)+'</strong></div>';
  $("#homeVehiclesButton").textContent=t("homeVehicles");$("#homeAddCarButton").textContent=t("homeAdd");
  renderAssistantPanel();
}
const assistantUi={
 bg:{title:"Интелигентен помощник",intro:"Анализирам пробега, сервизната история и документите. Препоръките са ориентировъчни и трябва да се сверят със сервизната книжка и производителя.",noPlan:"Няма записан следващ срок. Добави дата или километри от сервизната книжка.",due:"Срокът е достигнат според записаните данни",planned:"Предстоящо според ориентировъчния интервал",basis:"Основа и причина",open:"Отвори автомобила",empty:"Добави автомобил, за да изготвя план за поддръжка.",plan:"Интелигентен сервизен план",check:"Провери сервизната история",soon:"Скоро",overdue:"За проверка / просрочено",future:"Планирай",reason:"Защо се препоръчва",estimate:"Ориентировъчна препоръка — не е заводски интервал",noHistory:"Няма запис за тази дейност. Провери сервизната книжка и при нужда направи оглед.",basedOn:"Последен запис",km:"Оставащи километри",days:"Оставащи дни",priority:"Приоритети за поддръжка",spend:"Записани разходи за сервиз",documents:"Документи"},
 en:{title:"Smart assistant",intro:"I analyse mileage, service history and documents. Recommendations are indicative and must be checked against the service book and manufacturer.",noPlan:"No next due point is saved. Add a date or mileage from the service book.",due:"Due according to saved data",planned:"Upcoming based on an indicative interval",basis:"Basis and reason",open:"Open vehicle",empty:"Add a vehicle to create a maintenance plan.",plan:"Intelligent maintenance plan",check:"Check service history",soon:"Due soon",overdue:"Check / overdue",future:"Plan ahead",reason:"Why this is recommended",estimate:"Indicative recommendation — not a factory interval",noHistory:"No record found for this activity. Check the service book and inspect if needed.",basedOn:"Last record",km:"Kilometres remaining",days:"Days remaining",priority:"Maintenance priorities",spend:"Recorded service spend",documents:"Documents"},
 es:{title:"Asistente inteligente",intro:"Analizo kilometraje, historial de servicio y documentos. Las recomendaciones son orientativas y deben comprobarse con el manual y el fabricante.",noPlan:"No hay próximo plazo guardado. Añade una fecha o kilometraje del libro de mantenimiento.",due:"Vencido según los datos guardados",planned:"Próximo según un intervalo orientativo",basis:"Base y motivo",open:"Abrir vehículo",empty:"Añade un vehículo para crear un plan de mantenimiento.",plan:"Plan inteligente de mantenimiento",check:"Revisar historial",soon:"Próximo",overdue:"Revisar / vencido",future:"Planificar",reason:"Por qué se recomienda",estimate:"Recomendación orientativa — no es un intervalo oficial",noHistory:"No hay registro de esta actividad. Consulta el manual y revisa si es necesario.",basedOn:"Último registro",km:"Kilómetros restantes",days:"Días restantes",priority:"Prioridades de mantenimiento",spend:"Gasto de servicio registrado",documents:"Documentos"},
 de:{title:"Intelligenter Assistent",intro:"Ich analysiere Kilometerstand, Wartungshistorie und Dokumente. Empfehlungen sind Richtwerte und müssen anhand des Servicehefts und der Herstellerangaben geprüft werden.",noPlan:"Kein nächster Termin gespeichert. Ergänze Datum oder Kilometerstand aus dem Serviceheft.",due:"Laut gespeicherten Daten fällig",planned:"Demnächst nach einem Richtintervall",basis:"Grundlage und Grund",open:"Fahrzeug öffnen",empty:"Füge ein Fahrzeug hinzu, um einen Wartungsplan zu erstellen.",plan:"Intelligenter Wartungsplan",check:"Wartungshistorie prüfen",soon:"Bald fällig",overdue:"Prüfen / überfällig",future:"Einplanen",reason:"Warum empfohlen",estimate:"Richtwert — kein Herstellerintervall",noHistory:"Kein Eintrag vorhanden. Serviceheft prüfen und bei Bedarf kontrollieren.",basedOn:"Letzter Eintrag",km:"Verbleibende Kilometer",days:"Verbleibende Tage",priority:"Priorität",documents:"Dokumente"},
 pt:{title:"Assistente inteligente",intro:"Analiso quilometragem, histórico de manutenção e documentos. As recomendações são indicativas e devem ser confirmadas no manual e pelo fabricante.",noPlan:"Não existe próximo prazo guardado. Adicione a data ou quilometragem do livro de manutenção.",due:"Vencido segundo os dados guardados",planned:"Próximo segundo um intervalo indicativo",basis:"Base e motivo",open:"Abrir veículo",empty:"Adicione um veículo para criar um plano de manutenção.",plan:"Plano inteligente de manutenção",check:"Verificar histórico",soon:"A aproximar-se",overdue:"Verificar / vencido",future:"Planear",reason:"Porque é recomendado",estimate:"Recomendação indicativa — não é intervalo oficial",noHistory:"Sem registo desta atividade. Consulte o manual e inspecione se necessário.",basedOn:"Último registo",km:"Quilómetros restantes",days:"Dias restantes",priority:"Prioridades de manutenção",spend:"Despesas de manutenção registadas",documents:"Documentos"},
 ru:{title:"Интеллектуальный помощник",intro:"Анализирую пробег, историю обслуживания и документы. Рекомендации ориентировочные и должны проверяться по сервисной книжке и данным производителя.",noPlan:"Следующий срок не сохранён. Добавьте дату или пробег из сервисной книжки.",due:"Срок наступил по сохранённым данным",planned:"Скоро по ориентировочному интервалу",basis:"Основание и причина",open:"Открыть автомобиль",empty:"Добавьте автомобиль для создания плана обслуживания.",plan:"Интеллектуальный план обслуживания",check:"Проверить историю",soon:"Скоро",overdue:"Проверить / просрочено",future:"Запланировать",reason:"Почему рекомендуется",estimate:"Ориентир — не заводской интервал",noHistory:"Нет записи об этой работе. Проверьте сервисную книжку и при необходимости выполните осмотр.",basedOn:"Последняя запись",km:"Осталось километров",days:"Осталось дней",priority:"Приоритеты обслуживания",spend:"Записанные расходы на обслуживание",documents:"Документы"}
};
function assistantText(key){return assistantUi[language]?.[key]||assistantUi.en[key]||key;}
const maintenanceRules=[
 {type:"oil",intervalKm:10000,intervalMonths:12,reason:{bg:"Маслото старее или е близо до ориентировъчния пробег за смяна; провери точната спецификация.",en:"Oil age or mileage is approaching an indicative change point; verify the exact specification."}},
 {type:"filters",intervalKm:20000,intervalMonths:12,reason:{bg:"Филтрите влияят на въздушния поток, горивната система и качеството на въздуха в купето.",en:"Filters affect airflow, fuel delivery and cabin air quality."}},
 {type:"brakes",intervalKm:15000,intervalMonths:12,reason:{bg:"Периодичният оглед на накладки, дискове и спирачна течност е важен за безопасността.",en:"Periodic inspection of pads, discs and brake fluid is important for safety."}},
 {type:"tyres",intervalKm:10000,intervalMonths:6,reason:{bg:"Провери дълбочина на грайфера, налягане, възраст и неравномерно износване.",en:"Check tread depth, pressure, tyre age and uneven wear."}},
 {type:"battery",intervalKm:0,intervalMonths:12,reason:{bg:"Тестът на акумулатора помага да се открие отслабване преди проблем със стартирането.",en:"A battery test can identify deterioration before starting problems occur."}},
 {type:"coolant",intervalKm:0,intervalMonths:24,reason:{bg:"Провери ниво, концентрация, течове и спецификация на охлаждащата течност.",en:"Check coolant level, concentration, leaks and specification."}},
 {type:"airConditioning",intervalKm:0,intervalMonths:12,reason:{bg:"Провери работата, филтъра на купето и евентуални течове; обслужването зависи от системата.",en:"Check operation, cabin filter and possible leaks; service needs depend on the system."}},
 {type:"diagnostics",intervalKm:20000,intervalMonths:12,reason:{bg:"Периодичната диагностика може да открие записани грешки и отклонения.",en:"Periodic diagnostics can reveal stored faults and irregularities."}}
];
function addMonthsToDate(date,months){const d=new Date(date+"T12:00:00");const day=d.getDate();d.setMonth(d.getMonth()+months);if(d.getDate()<day)d.setDate(0);return d;}
function getMaintenanceRecommendations(car){
 const today=new Date();today.setHours(0,0,0,0);const mileage=Number(car.mileage)||0;const log=Array.isArray(car.serviceLog)?car.serviceLog:[];
 return maintenanceRules.map(rule=>{
  const records=log.filter(x=>x.type===rule.type).sort((a,b)=>(b.date||"").localeCompare(a.date||"")||Number(b.odometer)-Number(a.odometer));
  const last=records[0];if(!last)return {...rule,last:null,status:"check",reason:assistantUi[language]?.noHistory||assistantUi.en.noHistory};
  const lastKm=Number(last.odometer)||0;const kmDue=rule.intervalKm?lastKm+rule.intervalKm:null;
  const dueDate=rule.intervalMonths&&last.date?addMonthsToDate(last.date,rule.intervalMonths):null;
  const remainingKm=kmDue===null?null:kmDue-mileage;
  const remainingDays=dueDate===null?null:Math.ceil((dueDate-today)/86400000);
  const due=(remainingKm!==null&&remainingKm<=0)||(remainingDays!==null&&remainingDays<=0);
  const soon=!due&&((remainingKm!==null&&remainingKm<=1000)||(remainingDays!==null&&remainingDays<=30));
  return {...rule,last,kmDue,dueDate,remainingKm,remainingDays,status:due?"overdue":soon?"soon":"future"};
 });
}
function renderAssistantPanel(){
 const panel=$("#assistantPanel");if(!panel)return;
 const oldNote=$("#homeNote");if(oldNote)oldNote.hidden=true;
 const recommendations=vehicles.flatMap(car=>getMaintenanceRecommendations(car).map(item=>({car,item})));
 const priority={overdue:0,soon:1,check:2,future:3};recommendations.sort((a,b)=>priority[a.item.status]-priority[b.item.status]||(a.item.remainingDays??99999)-(b.item.remainingDays??99999));
 const maintenanceCards=recommendations.map(({car,item})=>{
  const reason=item.reason?.[language]||item.reason?.en||item.reason;
  const timing=[item.remainingKm!==null&&item.remainingKm!==undefined?(item.remainingKm<=0?Math.abs(item.remainingKm).toLocaleString(locale())+" km overdue":item.remainingKm.toLocaleString(locale())+" km remaining"):"",item.remainingDays!==null&&item.remainingDays!==undefined?(item.remainingDays<=0?Math.abs(item.remainingDays)+" days overdue":item.remainingDays+" days remaining"):""].filter(Boolean).join(" · ");
  const status=assistantText(item.status==="overdue"?"overdue":item.status==="soon"?"soon":item.status==="check"?"check":"future");
  const basis=item.last?assistantText("basedOn")+": "+item.last.date+" · "+Number(item.last.odometer||0).toLocaleString(locale())+" km":assistantText("noHistory");
  return '<article class="assistant-item assistant-recommendation"><div class="assistant-item-main"><strong>'+escapeHtml(car.make+" "+car.model)+' · '+escapeHtml(serviceActivityLabel(item.type))+'</strong><p>'+escapeHtml(status+(timing?" · "+timing:""))+'</p><small><b>'+escapeHtml(assistantText("reason"))+':</b> '+escapeHtml(reason)+'</small><small>'+escapeHtml(basis)+'</small><small>'+escapeHtml(assistantText("estimate"))+'</small></div><button type="button" class="secondary-button assistant-open" data-assistant-car="'+escapeHtml(car.id)+'">'+escapeHtml(assistantText("open"))+'</button></article>';
 }).join("");
 const manualItems=vehicles.flatMap(car=>(car.serviceLog||[]).filter(r=>r.nextDueDate||r.nextDueOdometer).map(record=>({car,record})));
 const manualCards=manualItems.map(({car,record})=>'<article class="assistant-item"><div class="assistant-item-main"><strong>'+escapeHtml(car.make+" "+car.model)+' · '+escapeHtml(serviceActivityLabel(record.type))+'</strong><p>'+escapeHtml([record.nextDueDate||"",record.nextDueOdometer?Number(record.nextDueOdometer).toLocaleString(locale())+" km":""].filter(Boolean).join(" · "))+'</p><small>'+escapeHtml(assistantText("basis"))+'</small></div><button type="button" class="secondary-button assistant-open" data-assistant-car="'+escapeHtml(car.id)+'">'+escapeHtml(assistantText("open"))+'</button></article>').join("");
 const documentItems=vehicles.flatMap(car=>documentTypes.map(type=>({car,type,doc:ensureDocuments(car)[type],days:documentDays(ensureDocuments(car)[type].expiryDate)})).filter(x=>x.days!==null&&x.days<=30));
 const documentCards=documentItems.map(x=>'<article class="assistant-item"><div class="assistant-item-main"><strong>'+escapeHtml(x.car.make+" "+x.car.model)+" · "+escapeHtml(dt(x.type))+'</strong><p>'+escapeHtml(documentStatus(x.doc.expiryDate))+'</p><small>'+escapeHtml(x.doc.reference||"")+'</small></div><button type="button" class="secondary-button assistant-open" data-assistant-car="'+escapeHtml(x.car.id)+'">'+escapeHtml(assistantText("open"))+'</button></article>').join("");
 const forecast=vehicles.map(car=>{const cost=(car.serviceLog||[]).reduce((n,x)=>n+(Number(x.cost)||0),0);return '<p><strong>'+escapeHtml(car.make+" "+car.model)+'</strong> · '+escapeHtml(formatMoney(cost))+' '+escapeHtml(assistantText("basedOn"))+'</p>';}).join("");
 panel.innerHTML='<div class="assistant-panel-heading"><div><p class="eyebrow">MA-CAR</p><h3>'+escapeHtml(assistantText("title"))+'</h3></div></div><p class="assistant-intro">'+escapeHtml(assistantText("intro"))+'</p><h4 class="assistant-plan-title">'+escapeHtml(assistantText("plan"))+'</h4>'+ (maintenanceCards||'<p class="assistant-empty">'+escapeHtml(assistantText("empty"))+'</p>')+(manualCards?'<h4 class="assistant-plan-title">'+escapeHtml(assistantText("future"))+'</h4>'+manualCards:"")+(documentCards?'<h4 class="assistant-plan-title">'+escapeHtml(assistantText("documents"))+'</h4>'+documentCards:"")+'<div class="assistant-forecast"><h4>'+escapeHtml(assistantText("spend"))+'</h4>'+forecast+'</div>';
}

function renderHistory(){
  const target=$("#historyContent");if(!target)return;
  const entries=[];
  vehicles.forEach(car=>{
    (car.fuelLog||[]).forEach(item=>entries.push({date:item.date||"",car:car.make+" "+car.model,kind:t("historyFuel"),description:(item.litres||0)+" L · "+(item.odometer||"—")+" km",amount:Number(item.total)||0}));
    (car.expenses||[]).forEach(item=>entries.push({date:item.date||"",car:car.make+" "+car.model,kind:t("historyExpense"),description:item.description||t(item.category)||t("other"),amount:Number(item.amount)||0}));
    (car.serviceLog||[]).forEach(item=>entries.push({date:item.date||"",car:car.make+" "+car.model,kind:st("record"),description:serviceActivityLabel(item.type)+" · "+(item.description||"")+" · "+(item.odometer||"—")+" km",amount:Number(item.cost)||0}));
  });
  entries.sort((a,b)=>b.date.localeCompare(a.date));
  target.innerHTML=entries.length?entries.map(item=>'<article class="combined-history-entry"><div><span class="history-kind">'+item.kind+'</span><strong>'+escapeHtml(item.car)+'</strong><small>'+escapeHtml(item.date)+' · '+escapeHtml(item.description)+'</small></div><strong>'+formatMoney(item.amount)+'</strong></article>').join(""):'<div class="empty-state">'+t("historyEmpty")+'</div>';
}

function showGarage(){showView("vehicles");selectedVehicleId=null;$("#carProfileSection").hidden=true;$("#garageSection").hidden=false;}
function openProfile(id){const car=vehicles.find(item=>item.id===id);if(!car)return;showView("vehicles");selectedVehicleId=id;$("#garageSection").hidden=true;$("#carFormSection").hidden=true;$("#carProfileSection").hidden=false;renderProfile(car);window.scrollTo({top:0,behavior:"smooth"});}
function formatMoney(value){return new Intl.NumberFormat(locale(),{style:"currency",currency:"EUR"}).format(value);}
function fuelStats(car){
 const log=[...(car.fuelLog||[])].sort((a,b)=>a.odometer-b.odometer);let previous=null,litres=0,stats={};
 for(const entry of log){litres+=Number(entry.litres)||0;if(entry.fullTank){if(previous){const km=Number(entry.odometer)-Number(previous.odometer);if(km>0)stats[entry.id]=litres/km*100;}previous=entry;litres=0;}}
 return stats;
}
function renderFuel(car){
 const fuelLabels={"Бензин / Petrol":"petrol","Бензин":"petrol","Petrol":"petrol","Дизел":"diesel","Diesel":"diesel","LPG":"lpg","CNG":"cng","Електричество":"electricity","Electricity":"electricity"};
 const log=[...(car.fuelLog||[])].sort((a,b)=>b.date.localeCompare(a.date)),stats=fuelStats(car);
 $("#fuelHistory").innerHTML=log.length?log.map(entry=>'<article class="fuel-entry"><div><strong>'+escapeHtml(entry.date)+' · '+escapeHtml(t(fuelLabels[entry.fuelType]||entry.fuelType)||entry.fuelType)+'</strong><small>'+escapeHtml(entry.odometer)+' km'+(entry.fullTank?' · '+t("fullTank"):"")+'</small></div><div class="fuel-entry-values"><strong>'+escapeHtml(entry.litres)+' L</strong><span>'+formatMoney(Number(entry.total)||0)+'</span></div>'+(stats[entry.id]?'<p class="fuel-consumption">'+t("fuelConsumption")+': '+stats[entry.id].toFixed(2)+' L/100 km</p>':"")+'</article>').join(""):'<p class="empty-fuel">'+t("emptyFuel")+'</p>';
 const values=Object.values(stats);$("#averageConsumption").textContent=values.length?(values.reduce((sum,value)=>sum+value,0)/values.length).toFixed(2)+" L/100 km":t("notSet");
}
function renderExpenses(car){
 const entries=[...(car.expenses||[])].sort((a,b)=>b.date.localeCompare(a.date));
 const total=entries.reduce((sum,item)=>sum+(Number(item.amount)||0),0)+(car.serviceLog||[]).reduce((sum,item)=>sum+(Number(item.cost)||0),0);
 $("#expenseTotal").textContent=formatMoney(total);
 
 $("#expenseHistory").innerHTML=entries.length?entries.map(item=>'<article class="expense-entry"><div><strong>'+escapeHtml(item.date)+' · '+escapeHtml(expenseCategoryLabel(item.category))+'</strong><small>'+escapeHtml(item.description||t("notSet"))+(item.odometer!==""&&item.odometer!=null?' · '+escapeHtml(item.odometer)+' km':"")+'</small></div><div class="expense-entry-values"><strong>'+formatMoney(Number(item.amount)||0)+'</strong><button class="expense-delete" type="button" data-delete-expense="'+escapeHtml(item.id)+'">'+t("deleteExpense")+'</button></div></article>').join(""):'<p class="empty-fuel">'+t("emptyExpenses")+'</p>';
}

function renderServiceTypes(){
 const select=$("#serviceType"),current=select.value;
 const types=serviceActivityTypes;
 select.innerHTML=types.map(type=>'<option value="'+type+'">'+escapeHtml(serviceActivityLabel(type))+'</option>').join("");
 if(types.includes(current))select.value=current;
}
function renderService(car){
 const records=[...(car.serviceLog||[])].sort((a,b)=>b.date.localeCompare(a.date));
 const plan=records.find(item=>item.nextDueDate||item.nextDueOdometer);
 const summary=$("#servicePlanSummary");
 if(plan){
  const date=plan.nextDueDate?new Date(plan.nextDueDate+"T00:00:00").toLocaleDateString(locale()):"";
  const km=plan.nextDueOdometer?Number(plan.nextDueOdometer).toLocaleString(locale())+" km":"";
  const due=(plan.nextDueDate&&plan.nextDueDate<=new Date().toISOString().slice(0,10))||(plan.nextDueOdometer&&Number(car.mileage)>=Number(plan.nextDueOdometer));
  summary.innerHTML='<strong>'+st("assistant")+'</strong><p>'+escapeHtml([date,km].filter(Boolean).join(" · "))+'</p><small>'+st(due?"due":"planned")+'</small>';
 }else{summary.innerHTML='<strong>'+st("assistant")+'</strong><p>'+st("noPlan")+'</p>';}
 $("#serviceHistory").innerHTML=records.length?records.map(item=>'<article class="service-entry"><div><strong>'+escapeHtml(item.date)+' · '+escapeHtml(serviceActivityLabel(item.type))+'</strong><small>'+escapeHtml(item.description||"")+' · '+escapeHtml(item.odometer)+' km</small>'+(item.nextDueDate||item.nextDueOdometer?'<small>'+st("nextService")+': '+escapeHtml([item.nextDueDate,item.nextDueOdometer?Number(item.nextDueOdometer).toLocaleString(locale())+" km":""].filter(Boolean).join(" · "))+'</small>':"")+'</div><div class="service-entry-values"><strong>'+formatMoney(Number(item.cost)||0)+'</strong><button class="service-delete" type="button" data-delete-service="'+escapeHtml(item.id)+'">'+st("delete")+'</button></div></article>').join(""):'<p class="empty-fuel">'+st("empty")+'</p>';
}
function renderServiceLanguage(){
 $("#serviceSectionTitle").textContent=st("title");
 $("#serviceIntro").textContent=st("intro");
 $("#serviceHistoryTitle").textContent=st("history");
 document.querySelectorAll("[data-service-text]").forEach(el=>{el.textContent=st(el.dataset.serviceText);});
 renderServiceTypes();
}

function renderProfile(car){
  $("#profileTitle").textContent=(car.make+" "+car.model).trim();
  $("#profileRegistration").textContent=car.registration||"";
  const fields=[["year",car.year],["engine",car.engine],["fuel",car.fuel],["power",car.power],["transmission",car.transmission],["vin",car.vin],["mileage",car.mileage],["color",car.color]];
  $("#profileDetails").innerHTML=fields.map(([key,value])=>`<div class="detail-item"><span>${t(key)}</span><strong>${escapeHtml(value||t("notSet"))}</strong></div>`).join("");
  renderFuel(car);
  renderExpenses(car);
  renderService(car);
  renderDocuments(car);
}
function render(){
  document.documentElement.lang=language;
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n);});
  renderLanguageOptions();renderFuelOptions();renderExpenseOptions();renderServiceLanguage();
  const demoNotice=$("#demoNotice");if(demoNotice)demoNotice.hidden=!DEMO_MODE;
  $("#carCount").textContent=vehicles.length+" / 3";
  $("#carList").innerHTML=vehicles.length?vehicles.map(car=>`<article class="car-card" data-open-profile="${escapeHtml(car.id)}" tabindex="0" role="button" aria-label="${t("profile")}: ${escapeHtml(car.make)} ${escapeHtml(car.model)}"><div class="car-card-top"><div class="car-symbol" aria-hidden="true">🚗</div><div class="car-actions"><button class="edit-button" type="button" data-edit="${escapeHtml(car.id)}" aria-label="${t("edit")}" title="${t("edit")}">✎</button><button class="delete-button" type="button" data-delete="${escapeHtml(car.id)}" aria-label="${t("remove")}" title="${t("remove")}">×</button></div></div><h3>${escapeHtml(car.make)} ${escapeHtml(car.model)}</h3><p class="car-meta">${car.year?escapeHtml(car.year):t("unknownYear")}</p><span class="car-registration">${escapeHtml((car.registration||"").toUpperCase())}</span><p class="card-hint">${t("tapProfile")}</p></article>`).join(""):`<div class="empty-state">${t("empty")}</div>`;
  $("#addCarButton").disabled=vehicles.length>=3;
  $("#limitNote").hidden=vehicles.length>=3;
  document.querySelectorAll(".nav-button").forEach(button=>{const key={home:"navHome",vehicles:"navVehicles",history:"navHistory",profile:"navProfile"}[button.dataset.view];if(key)button.textContent=t(key);});
  $("#homeSection").querySelector("h2").textContent=t("homeTitle");
  $("#historySection").querySelector("h2").textContent=t("historyTitle");
  $("#historySection").querySelector(".section-intro").textContent=t("historyIntro");
  $("#appProfileSection").querySelector("h2").textContent=t("appProfile");
  $("#appProfileSection").querySelectorAll(".settings-card")[0].querySelector("strong").textContent=t("languageSetting");
  $("#appProfileSection").querySelectorAll(".settings-card")[0].querySelector("p").textContent=t("languageHelp");
  $("#appProfileSection").querySelectorAll(".settings-card")[1].querySelector("strong").textContent=t("futureSettings");
  $("#appProfileSection").querySelectorAll(".settings-card")[1].querySelector("p").textContent=t("futureHelp");
  renderHome();renderHistory();
  if(!$("#carFormSection").hidden){$("#carFormTitle").textContent=t(editingVehicleId?"editCar":"newCar");$("#carFormSubmit").textContent=t(editingVehicleId?"updateCar":"saveCar");}
}
function openForm(){showView("vehicles");if(vehicles.length>=3){alert(t("limitReached"));return;}editingVehicleId=null;$("#carForm").reset();$("#carFormSection").hidden=false;$("#carProfileSection").hidden=true;render();$("#carForm").elements.make.focus();}
function editVehicle(id){
  const car=vehicles.find(item=>item.id===id);if(!car)return;
  showView("vehicles");selectedVehicleId=id;editingVehicleId=id;
  ["make","model","registration","year","engine","fuel","power","transmission","vin","mileage","color"].forEach(key=>$("#carForm").elements[key].value=car[key]||"");
  $("#garageSection").hidden=false;$("#carProfileSection").hidden=true;$("#carFormSection").hidden=false;render();$("#carForm").elements.make.focus();
}
function closeForm(){editingVehicleId=null;$("#carFormSection").hidden=true;$("#carForm").reset();}
document.querySelectorAll(".nav-button").forEach(button=>button.addEventListener("click",()=>showView(button.dataset.view)));
$("#demoScreenButton")?.addEventListener("click",()=>{if(DEMO_MODE){showView("vehicles");}else{location.href=new URL("?demo=1",location.href).toString();}});
$("#homeVehiclesButton").addEventListener("click",()=>showView("vehicles"));
$("#homeAddCarButton").addEventListener("click",openForm);
$("#assistantPanel").addEventListener("click",event=>{const button=event.target.closest("[data-assistant-car]");if(button)openProfile(button.dataset.assistantCar);});
$("#languageSelect").addEventListener("change",event=>{language=event.target.value;localStorage.setItem("my-car-language",language);render();if(selectedVehicleId){const car=vehicles.find(item=>item.id===selectedVehicleId);if(car)renderProfile(car);}});
$("#addCarButton").addEventListener("click",openForm);
$("#closeForm").addEventListener("click",closeForm);
$("#backToGarage").addEventListener("click",showGarage);
$("#profileEdit").addEventListener("click",()=>{if(selectedVehicleId)editVehicle(selectedVehicleId);});
$("#fuelDate").value=new Date().toISOString().slice(0,10);
$("#expenseDate").value=new Date().toISOString().slice(0,10);
function calculateFuelTotal(){const litres=Number($("#fuelLitres").value),price=Number($("#fuelPrice").value);$("#fuelTotal").value=litres>0&&price>0?(litres*price).toFixed(2):"";}
$("#fuelLitres").addEventListener("input",calculateFuelTotal);$("#fuelPrice").addEventListener("input",calculateFuelTotal);
$("#fuelForm").addEventListener("submit",event=>{
 event.preventDefault();const car=vehicles.find(item=>item.id===selectedVehicleId);if(!car)return;
 const litres=Number($("#fuelLitres").value),price=Number($("#fuelPrice").value),odometer=Number($("#fuelOdometer").value);
 if(!(litres>0&&price>0&&odometer>=0)){alert(t("invalidData"));return;}
 car.fuelLog=Array.isArray(car.fuelLog)?car.fuelLog:[];
 const max=Math.max(-1,...car.fuelLog.map(item=>Number(item.odometer)));
 if(odometer<max){alert(t("mileageError"));return;}
 car.fuelLog.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),date:$("#fuelDate").value,fuelType:$("#fuelType").value,litres,pricePerLitre:price,total:Number((litres*price).toFixed(2)),odometer,fullTank:$("#fuelFullTank").checked});
 saveVehicles();$("#fuelForm").reset();$("#fuelDate").value=new Date().toISOString().slice(0,10);$("#fuelTotal").value="";renderProfile(car);renderHistory();renderHome();
});

$("#serviceDate").value=new Date().toISOString().slice(0,10);
$("#serviceForm").addEventListener("submit",event=>{
 event.preventDefault();const car=vehicles.find(item=>item.id===selectedVehicleId);if(!car)return;
 const date=$("#serviceDate").value,odometer=Number($("#serviceOdometer").value),cost=$("#serviceCost").value===""?0:Number($("#serviceCost").value),nextDueOdometer=$("#serviceNextOdometer").value===""?"":Number($("#serviceNextOdometer").value),nextDueDate=$("#serviceNextDate").value;
 if(!date||!Number.isFinite(odometer)||odometer<0||!Number.isFinite(cost)||cost<0||(nextDueOdometer!==""&&(!Number.isFinite(nextDueOdometer)||nextDueOdometer<=odometer))||(nextDueDate&&nextDueDate<date)){alert(t("invalidData"));return;}
 car.serviceLog=Array.isArray(car.serviceLog)?car.serviceLog:[];
 car.serviceLog.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),date,type:$("#serviceType").value,odometer,description:$("#serviceDescription").value.trim(),cost:Number(cost.toFixed(2)),nextDueDate,nextDueOdometer});
 saveVehicles();$("#serviceForm").reset();$("#serviceDate").value=new Date().toISOString().slice(0,10);renderProfile(car);renderHistory();renderHome();
});
$("#serviceHistory").addEventListener("click",event=>{
 const button=event.target.closest("[data-delete-service]");if(!button)return;
 const car=vehicles.find(item=>item.id===selectedVehicleId);if(!car||!confirm(st("confirmDelete")))return;
 car.serviceLog=(car.serviceLog||[]).filter(item=>item.id!==button.dataset.deleteService);saveVehicles();renderService(car);renderHistory();renderHome();renderExpenses(car);
});


$("#documentForm").addEventListener("submit",event=>{
 event.preventDefault();const car=vehicles.find(item=>item.id===selectedVehicleId);if(!car)return;const docs=ensureDocuments(car);
 documentTypes.forEach(type=>{docs[type]={expiryDate:$("#doc-"+type+"-date").value,reference:$("#doc-"+type+"-reference").value.trim()};});
 saveVehicles();renderDocuments(car);renderHome();alert(dt("saved"));checkDocumentNotifications();
});
$("#documentNotify").addEventListener("click",async()=>{if(!("Notification" in window)){alert(dt("permissionDenied"));return;}const result=await Notification.requestPermission();alert(result==="granted"?dt("permissionGranted"):dt("permissionDenied"));checkDocumentNotifications();});
window.addEventListener("focus",checkDocumentNotifications);
document.addEventListener("visibilitychange",()=>{if(!document.hidden)checkDocumentNotifications();});

$("#expenseForm").addEventListener("submit",event=>{
 event.preventDefault();const car=vehicles.find(item=>item.id===selectedVehicleId);if(!car)return;
 const amount=Number($("#expenseAmount").value),odometer=$("#expenseOdometer").value;
 if(!(amount>0)||!Number.isFinite(amount)){alert(t("invalidData"));return;}
 car.expenses=Array.isArray(car.expenses)?car.expenses:[];
 car.expenses.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),date:$("#expenseDate").value,category:$("#expenseCategory").value,description:$("#expenseDescription").value.trim(),amount:Number(amount.toFixed(2)),odometer});
 saveVehicles();$("#expenseForm").reset();$("#expenseDate").value=new Date().toISOString().slice(0,10);renderProfile(car);renderHistory();renderHome();
});
$("#expenseHistory").addEventListener("click",event=>{
 const button=event.target.closest("[data-delete-expense]");if(!button)return;
 const car=vehicles.find(item=>item.id===selectedVehicleId);if(!car||!confirm(t("confirmDeleteExpense")))return;
 car.expenses=(car.expenses||[]).filter(item=>item.id!==button.dataset.deleteExpense);saveVehicles();renderExpenses(car);renderHistory();renderHome();
});
$("#carForm").addEventListener("submit",event=>{
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  const fields=["make","model","registration","year","engine","fuel","power","transmission","vin","mileage","color"];
  const values=Object.fromEntries(fields.map(key=>[key,String(form.get(key)||"").trim()]));
  if(!values.make||!values.model||!values.registration)return;
  if(values.year&&(!/^\d{4}$/.test(values.year)||Number(values.year)<1900||Number(values.year)>2100)){alert(t("validYear"));return;}
  if(editingVehicleId){const index=vehicles.findIndex(car=>car.id===editingVehicleId);if(index<0)return;vehicles[index]={...vehicles[index],...values};}
  else{if(vehicles.length>=3){alert(t("limitReached"));return;}vehicles.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),...values});}
  saveVehicles();const savedId=editingVehicleId;closeForm();render();if(savedId)openProfile(savedId);
});
$("#carList").addEventListener("click",event=>{
  const editButton=event.target.closest("[data-edit]");if(editButton){event.stopPropagation();editVehicle(editButton.dataset.edit);return;}
  const deleteButton=event.target.closest("[data-delete]");if(deleteButton){event.stopPropagation();if(!confirm(t("confirmDelete")))return;vehicles=vehicles.filter(car=>car.id!==deleteButton.dataset.delete);saveVehicles();render();renderHistory();renderHome();return;}
  const card=event.target.closest("[data-open-profile]");if(card)openProfile(card.dataset.openProfile);
});
$("#carList").addEventListener("keydown",event=>{if((event.key==="Enter"||event.key===" ")&&event.target.matches("[data-open-profile]")){event.preventDefault();openProfile(event.target.dataset.openProfile);}});
if("serviceWorker" in navigator&&location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
render();
checkDocumentNotifications();
