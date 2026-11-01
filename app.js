const STORAGE_KEY = "my-car-vehicles-v1";
const DEMO_STORAGE_KEY = "my-car-demo-vehicles-v1";
const DEMO_MODE = new URLSearchParams(location.search).get("demo") === "1";
const translations = {
  bg: {eyebrow:"ТВОЯТ АВТОМОБИЛЕН ПОМОЩНИК",heading:"Всичко за автомобила. На едно място.",subtitle:"Следи автомобилите си, разходите и предстоящото обслужване лесно.",garage:"ГАРАЖ",yourCars:"Твоите автомобили",addCar:"Добави автомобил",limitNote:"Основната версия позволява до 3 автомобила.",newCar:"Нов автомобил",editCar:"Редактирай автомобил",make:"Марка",model:"Модел",registration:"Регистрационен номер",year:"Година",saveCar:"Запази автомобила",updateCar:"Запази промените",edit:"Редактирай",footer:"Твоят автомобилен дневник",empty:"Все още нямаш добавени автомобили. Започни, като добавиш първия си автомобил.",remove:"Изтрий автомобила",confirmDelete:"Сигурен ли си, че искаш да изтриеш този автомобил?",car:"Автомобил",limitReached:"Достигна лимита от 3 автомобила.",unknownYear:"Годината не е посочена.",back:"← Обратно към гаража",profile:"Профил на автомобила",engine:"Двигател",fuel:"Гориво",power:"Мощност",transmission:"Скоростна кутия",vin:"VIN номер",mileage:"Пробег (км)",color:"Цвят",notSet:"Не е посочено",saveDetails:"Запази данните",fuelLog:"ДНЕВНИК НА ГОРИВОТО",fuelHeading:"Гориво",average:"Среден разход",date:"Дата",fuelType:"Вид гориво",litres:"Литри",pricePerLitre:"Цена за литър (€)",totalAmount:"Обща сума (€)",odometer:"Пробег (км)",fullTank:"Зареждане до пълен резервоар",saveFuel:"Запиши зареждането",fuelHistory:"История на зарежданията",petrol:"Бензин",diesel:"Дизел",lpg:"Пропан-бутан (LPG)",cng:"Метан (CNG)",electricity:"Електричество",additionalData:"Допълнителни технически данни",fuelConsumption:"Разход",tapProfile:"Натисни за профил →",invalidData:"Провери въведените данни.",mileageError:"Пробегът не може да е по-малък от последния запис.",validYear:"Въведи валидна година между 1900 и 2100.",automatic:"Автоматично",emptyFuel:"Все още няма записи за зареждане.",expenseLog:"ДНЕВНИК НА РАЗХОДИТЕ",expenseHeading:"Разходи по автомобила",totalExpenses:"Общо разходи",expenseDate:"Дата",expenseCategory:"Категория",repair:"Ремонт",maintenance:"Обслужване",parts:"Части",tyres:"Гуми",insurance:"Застраховка",taxes:"Данъци и такси",other:"Други",expenseDescription:"Описание",expenseAmount:"Сума (€)",expenseOdometer:"Пробег (км)",saveExpense:"Запиши разхода",expenseHistory:"История на разходите",emptyExpenses:"Все още няма записани разходи.",deleteExpense:"Изтрий разхода",confirmDeleteExpense:"Сигурен ли си, че искаш да изтриеш този разход?"},
  en: {eyebrow:"YOUR CAR COMPANION",heading:"Everything about your car. In one place.",subtitle:"Easily track your vehicles, expenses and upcoming maintenance.",garage:"GARAGE",yourCars:"Your vehicles",addCar:"Add a vehicle",limitNote:"The basic version supports up to 3 vehicles.",newCar:"New vehicle",editCar:"Edit vehicle",make:"Make",model:"Model",registration:"Registration number",year:"Year",saveCar:"Save vehicle",updateCar:"Save changes",edit:"Edit",footer:"Your vehicle logbook",empty:"You have not added any vehicles yet. Start by adding your first car.",remove:"Delete vehicle",confirmDelete:"Are you sure you want to delete this vehicle?",car:"Vehicle",limitReached:"You have reached the 3-vehicle limit.",unknownYear:"Year not provided.",back:"← Back to garage",profile:"Vehicle profile",engine:"Engine",fuel:"Fuel type",power:"Power",transmission:"Transmission",vin:"VIN",mileage:"Mileage (km)",color:"Colour",notSet:"Not provided",saveDetails:"Save details",fuelLog:"FUEL LOG",fuelHeading:"Fuel",average:"Average consumption",date:"Date",fuelType:"Fuel type",litres:"Litres",pricePerLitre:"Price per litre (€)",totalAmount:"Total amount (€)",odometer:"Odometer (km)",fullTank:"Full tank",saveFuel:"Save fuel entry",fuelHistory:"Fuel history",petrol:"Petrol",diesel:"Diesel",lpg:"LPG",cng:"CNG",electricity:"Electricity",additionalData:"Additional technical details",fuelConsumption:"Consumption",tapProfile:"Tap to view profile →",invalidData:"Check the entered values.",mileageError:"Mileage cannot be lower than the latest entry.",validYear:"Enter a valid year between 1900 and 2100.",automatic:"Automatic",emptyFuel:"No fuel entries yet.",expenseLog:"EXPENSE LOG",expenseHeading:"Vehicle expenses",totalExpenses:"Total expenses",expenseDate:"Date",expenseCategory:"Category",repair:"Repair",maintenance:"Maintenance",parts:"Parts",tyres:"Tyres",insurance:"Insurance",taxes:"Taxes and fees",other:"Other",expenseDescription:"Description",expenseAmount:"Amount (€)",expenseOdometer:"Odometer (km)",saveExpense:"Save expense",expenseHistory:"Expense history",emptyExpenses:"No expenses recorded yet.",deleteExpense:"Delete expense",confirmDeleteExpense:"Are you sure you want to delete this expense?"},
  es: {eyebrow:"TU ASISTENTE PARA EL COCHE",heading:"Todo sobre tu coche. En un solo lugar.",subtitle:"Controla fácilmente tus vehículos, gastos y próximo mantenimiento.",garage:"GARAJE",yourCars:"Tus vehículos",addCar:"Añadir vehículo",limitNote:"La versión básica permite hasta 3 vehículos.",newCar:"Nuevo vehículo",editCar:"Editar vehículo",make:"Marca",model:"Modelo",registration:"Matrícula",year:"Año",saveCar:"Guardar vehículo",updateCar:"Guardar cambios",edit:"Editar",footer:"Tu registro del vehículo",empty:"Todavía no has añadido vehículos. Añade tu primer coche.",remove:"Eliminar vehículo",confirmDelete:"¿Seguro que quieres eliminar este vehículo?",car:"Vehículo",limitReached:"Has alcanzado el límite de 3 vehículos.",unknownYear:"Año no indicado.",back:"← Volver al garaje",profile:"Perfil del vehículo",engine:"Motor",fuel:"Combustible",power:"Potencia",transmission:"Transmisión",vin:"Número VIN",mileage:"Kilometraje (km)",color:"Color",notSet:"No indicado",saveDetails:"Guardar datos",fuelLog:"REGISTRO DE COMBUSTIBLE",fuelHeading:"Combustible",average:"Consumo medio",date:"Fecha",fuelType:"Tipo de combustible",litres:"Litros",pricePerLitre:"Precio por litro (€)",totalAmount:"Importe total (€)",odometer:"Kilometraje (km)",fullTank:"Depósito lleno",saveFuel:"Guardar repostaje",fuelHistory:"Historial de repostajes",petrol:"Gasolina",diesel:"Diésel",lpg:"GLP",cng:"GNC",electricity:"Electricidad",additionalData:"Datos técnicos adicionales",fuelConsumption:"Consumo",tapProfile:"Pulsa para ver el perfil →",invalidData:"Comprueba los datos introducidos.",mileageError:"El kilometraje no puede ser inferior al último registro.",validYear:"Introduce un año válido entre 1900 y 2100.",automatic:"Automático",emptyFuel:"Todavía no hay repostajes registrados.",expenseLog:"REGISTRO DE GASTOS",expenseHeading:"Gastos del vehículo",totalExpenses:"Gastos totales",expenseDate:"Fecha",expenseCategory:"Categoría",repair:"Reparación",maintenance:"Mantenimiento",parts:"Piezas",tyres:"Neumáticos",insurance:"Seguro",taxes:"Impuestos y tasas",other:"Otros",expenseDescription:"Descripción",expenseAmount:"Importe (€)",expenseOdometer:"Kilometraje (km)",saveExpense:"Guardar gasto",expenseHistory:"Historial de gastos",emptyExpenses:"Todavía no hay gastos registrados.",deleteExpense:"Eliminar gasto",confirmDeleteExpense:"¿Seguro que quieres eliminar este gasto?"},
  de: {eyebrow:"DEIN AUTO-ASSISTENT",heading:"Alles rund ums Auto. An einem Ort.",subtitle:"Verwalte Fahrzeuge, Kosten und anstehende Wartungen ganz einfach.",garage:"GARAGE",yourCars:"Deine Fahrzeuge",addCar:"Fahrzeug hinzufügen",limitNote:"Die Basisversion unterstützt bis zu 3 Fahrzeuge.",newCar:"Neues Fahrzeug",editCar:"Fahrzeug bearbeiten",make:"Marke",model:"Modell",registration:"Kennzeichen",year:"Baujahr",saveCar:"Fahrzeug speichern",updateCar:"Änderungen speichern",edit:"Bearbeiten",footer:"Dein Fahrzeugtagebuch",empty:"Du hast noch kein Fahrzeug hinzugefügt. Füge dein erstes Auto hinzu.",remove:"Fahrzeug löschen",confirmDelete:"Möchtest du dieses Fahrzeug wirklich löschen?",car:"Fahrzeug",limitReached:"Du hast das Limit von 3 Fahrzeugen erreicht.",unknownYear:"Baujahr nicht angegeben.",back:"← Zurück zur Garage",profile:"Fahrzeugprofil",engine:"Motor",fuel:"Kraftstoff",power:"Leistung",transmission:"Getriebe",vin:"Fahrzeug-Identifikationsnummer (VIN)",mileage:"Kilometerstand (km)",color:"Farbe",notSet:"Nicht angegeben",saveDetails:"Daten speichern",fuelLog:"TANKBUCH",fuelHeading:"Kraftstoff",average:"Durchschnittsverbrauch",date:"Datum",fuelType:"Kraftstoffart",litres:"Liter",pricePerLitre:"Preis pro Liter (€)",totalAmount:"Gesamtbetrag (€)",odometer:"Kilometerstand (km)",fullTank:"Vollgetankt",saveFuel:"Tankvorgang speichern",fuelHistory:"Tankverlauf",petrol:"Benzin",diesel:"Diesel",lpg:"Autogas (LPG)",cng:"Erdgas (CNG)",electricity:"Strom",additionalData:"Zusätzliche technische Daten",fuelConsumption:"Verbrauch",tapProfile:"Zum Profil tippen →",invalidData:"Bitte überprüfe deine Eingaben.",mileageError:"Der Kilometerstand darf nicht niedriger als der letzte Eintrag sein.",validYear:"Bitte gib ein gültiges Jahr zwischen 1900 und 2100 ein.",automatic:"Automatisch",emptyFuel:"Noch keine Tankvorgänge vorhanden.",expenseLog:"KOSTENBUCH",expenseHeading:"Fahrzeugkosten",totalExpenses:"Gesamtkosten",expenseDate:"Datum",expenseCategory:"Kategorie",repair:"Reparatur",maintenance:"Wartung",parts:"Ersatzteile",tyres:"Reifen",insurance:"Versicherung",taxes:"Steuern und Gebühren",other:"Sonstiges",expenseDescription:"Beschreibung",expenseAmount:"Betrag (€)",expenseOdometer:"Kilometerstand (km)",saveExpense:"Kosten speichern",expenseHistory:"Kostenverlauf",emptyExpenses:"Noch keine Kosten erfasst.",deleteExpense:"Kosten löschen",confirmDeleteExpense:"Möchtest du diese Kosten wirklich löschen?"},
  pt: {eyebrow:"O TEU ASSISTENTE AUTOMÓVEL",heading:"Tudo sobre o teu carro. Num só lugar.",subtitle:"Acompanha facilmente os veículos, despesas e manutenção.",garage:"GARAGEM",yourCars:"Os teus veículos",addCar:"Adicionar veículo",limitNote:"A versão básica permite até 3 veículos.",newCar:"Novo veículo",editCar:"Editar veículo",make:"Marca",model:"Modelo",registration:"Matrícula",year:"Ano",saveCar:"Guardar veículo",updateCar:"Guardar alterações",edit:"Editar",footer:"O teu diário automóvel",empty:"Ainda não adicionaste veículos. Começa por adicionar o teu primeiro carro.",remove:"Eliminar veículo",confirmDelete:"Tens a certeza de que pretendes eliminar este veículo?",car:"Veículo",limitReached:"Atingiste o limite de 3 veículos.",unknownYear:"Ano não indicado.",back:"← Voltar à garagem",profile:"Perfil do veículo",engine:"Motor",fuel:"Combustível",power:"Potência",transmission:"Transmissão",vin:"Número VIN",mileage:"Quilometragem (km)",color:"Cor",notSet:"Não indicado",saveDetails:"Guardar dados",fuelLog:"REGISTO DE COMBUSTÍVEL",fuelHeading:"Combustível",average:"Consumo médio",date:"Data",fuelType:"Tipo de combustível",litres:"Litros",pricePerLitre:"Preço por litro (€)",totalAmount:"Valor total (€)",odometer:"Quilometragem (km)",fullTank:"Depósito cheio",saveFuel:"Guardar abastecimento",fuelHistory:"Histórico de abastecimentos",petrol:"Gasolina",diesel:"Gasóleo",lpg:"GPL",cng:"GNC",electricity:"Eletricidade",additionalData:"Dados técnicos adicionais",fuelConsumption:"Consumo",tapProfile:"Toca para ver o perfil →",invalidData:"Verifica os dados introduzidos.",mileageError:"A quilometragem não pode ser inferior ao último registo.",validYear:"Introduz um ano válido entre 1900 e 2100.",automatic:"Automático",emptyFuel:"Ainda não existem abastecimentos registados.",expenseLog:"REGISTO DE DESPESAS",expenseHeading:"Despesas do veículo",totalExpenses:"Despesas totais",expenseDate:"Data",expenseCategory:"Categoria",repair:"Reparação",maintenance:"Manutenção",parts:"Peças",tyres:"Pneus",insurance:"Seguro",taxes:"Impostos e taxas",other:"Outros",expenseDescription:"Descrição",expenseAmount:"Valor (€)",expenseOdometer:"Quilometragem (km)",saveExpense:"Guardar despesa",expenseHistory:"Histórico de despesas",emptyExpenses:"Ainda não existem despesas registadas.",deleteExpense:"Eliminar despesa",confirmDeleteExpense:"Tens a certeza de que pretendes eliminar esta despesa?"},
  ru: {eyebrow:"ТВОЙ АВТОМОБИЛЬНЫЙ ПОМОЩНИК",heading:"Всё об автомобиле. В одном месте.",subtitle:"Легко следи за автомобилями, расходами и обслуживанием.",garage:"ГАРАЖ",yourCars:"Твои автомобили",addCar:"Добавить автомобиль",limitNote:"Базовая версия поддерживает до 3 автомобилей.",newCar:"Новый автомобиль",editCar:"Редактировать автомобиль",make:"Марка",model:"Модель",registration:"Регистрационный номер",year:"Год",saveCar:"Сохранить автомобиль",updateCar:"Сохранить изменения",edit:"Изменить",footer:"Твой автомобильный журнал",empty:"Пока нет автомобилей. Добавь свой первый автомобиль.",remove:"Удалить автомобиль",confirmDelete:"Ты действительно хочешь удалить этот автомобиль?",car:"Автомобиль",limitReached:"Достигнут лимит в 3 автомобиля.",unknownYear:"Год не указан.",back:"← Назад в гараж",profile:"Профиль автомобиля",engine:"Двигатель",fuel:"Топливо",power:"Мощность",transmission:"Коробка передач",vin:"VIN-номер",mileage:"Пробег (км)",color:"Цвет",notSet:"Не указано",saveDetails:"Сохранить данные",fuelLog:"УЧЁТ ТОПЛИВА",fuelHeading:"Топливо",average:"Средний расход",date:"Дата",fuelType:"Тип топлива",litres:"Литры",pricePerLitre:"Цена за литр (€)",totalAmount:"Общая сумма (€)",odometer:"Пробег (км)",fullTank:"Полный бак",saveFuel:"Сохранить заправку",fuelHistory:"История заправок",petrol:"Бензин",diesel:"Дизель",lpg:"Сжиженный газ (LPG)",cng:"Метан (CNG)",electricity:"Электричество",additionalData:"Дополнительные технические данные",fuelConsumption:"Расход",tapProfile:"Нажми, чтобы открыть профиль →",invalidData:"Проверь введённые данные.",mileageError:"Пробег не может быть меньше последней записи.",validYear:"Введи корректный год от 1900 до 2100.",automatic:"Автоматически",emptyFuel:"Записей о заправках пока нет.",expenseLog:"УЧЁТ РАСХОДОВ",expenseHeading:"Расходы на автомобиль",totalExpenses:"Общие расходы",expenseDate:"Дата",expenseCategory:"Категория",repair:"Ремонт",maintenance:"Обслуживание",parts:"Запчасти",tyres:"Шины",insurance:"Страхование",taxes:"Налоги и сборы",other:"Другое",expenseDescription:"Описание",expenseAmount:"Сумма (€)",expenseOdometer:"Пробег (км)",saveExpense:"Сохранить расход",expenseHistory:"История расходов",emptyExpenses:"Расходы пока не записаны.",deleteExpense:"Удалить расход",confirmDeleteExpense:"Вы действительно хотите удалить этот расход?"}

};
const languageNames = {bg:"🇧🇬 Български",en:"🇬🇧 English",es:"🇪🇸 Español",de:"🇩🇪 Deutsch",pt:"🇵🇹 Português",ru:"🇷🇺 Русский"};
let language = localStorage.getItem("my-car-language") || (translations[navigator.language?.toLowerCase()] ? navigator.language.toLowerCase() : (translations[navigator.language?.slice(0,2)] ? navigator.language.slice(0,2) : "en"));
let vehicles = loadVehicles();
let editingVehicleId = null;
let selectedVehicleId = null;
const $ = (selector) => document.querySelector(selector);
function t(key){return translations[language]?.[key] || translations.en[key] || key;}
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
    {id:"toy-e1",date:"2026-10-05",category:"maintenance",description:"Смяна на масло и маслен филтър",amount:95,odometer:"124050"},
    {id:"toy-e2",date:"2026-10-14",category:"parts",description:"Въздушен и купе филтър",amount:38.5,odometer:"124280"},
    {id:"toy-e3",date:"2026-10-25",category:"insurance",description:"Гражданска отговорност – вноска",amount:72,odometer:"124650"}
   ]},
  {id:"demo-vw",make:"Volkswagen",model:"Passat 2.0 TDI",registration:"CA 5678 KT",year:"2020",engine:"2.0 дизел",fuel:"Дизел",power:"110 kW / 150 hp",transmission:"Автоматична DSG",vin:"DEMO0000000000002",mileage:"98500",color:"Тъмносин",
   fuelLog:[
    {id:"vw-f1",date:"2026-10-02",fuelType:"diesel",litres:50,pricePerLitre:1.38,total:69,odometer:97000,fullTank:true},
    {id:"vw-f2",date:"2026-10-11",fuelType:"diesel",litres:18,pricePerLitre:1.4,total:25.2,odometer:97300,fullTank:false},
    {id:"vw-f3",date:"2026-10-20",fuelType:"diesel",litres:27,pricePerLitre:1.41,total:38.07,odometer:97600,fullTank:true},
    {id:"vw-f4",date:"2026-10-29",fuelType:"diesel",litres:42,pricePerLitre:1.42,total:59.64,odometer:98150,fullTank:true}
   ],
   expenses:[
    {id:"vw-e1",date:"2026-10-06",category:"repair",description:"Смяна на предни спирачни накладки",amount:145,odometer:"97120"},
    {id:"vw-e2",date:"2026-10-16",category:"tyres",description:"Два нови зимни гуми",amount:210,odometer:"97420"},
    {id:"vw-e3",date:"2026-10-27",category:"taxes",description:"Годишен данък МПС",amount:86.4,odometer:"98000"}
   ]},
  {id:"demo-dacia",make:"Dacia",model:"Duster 1.6 LPG",registration:"PB 9012 MH",year:"2019",engine:"1.6 бензин / LPG",fuel:"LPG",power:"84 kW / 114 hp",transmission:"Ръчна",vin:"DEMO0000000000003",mileage:"76400",color:"Бял",
   fuelLog:[
    {id:"dac-f1",date:"2026-10-04",fuelType:"lpg",litres:38,pricePerLitre:0.68,total:25.84,odometer:75000,fullTank:true},
    {id:"dac-f2",date:"2026-10-13",fuelType:"lpg",litres:20,pricePerLitre:0.69,total:13.8,odometer:75300,fullTank:false},
    {id:"dac-f3",date:"2026-10-23",fuelType:"lpg",litres:22,pricePerLitre:0.7,total:15.4,odometer:75600,fullTank:true},
    {id:"dac-f4",date:"2026-10-31",fuelType:"lpg",litres:35,pricePerLitre:0.71,total:24.85,odometer:76200,fullTank:true}
   ],
   expenses:[
    {id:"dac-e1",date:"2026-10-08",category:"other",description:"Автомивка и почистване на салона",amount:24,odometer:"75120"},
    {id:"dac-e2",date:"2026-10-18",category:"maintenance",description:"Реглаж на преден мост",amount:42,odometer:"75480"}
   ]}
 ];
}
function loadVehicles(){
 const key=DEMO_MODE?DEMO_STORAGE_KEY:STORAGE_KEY;
 try{const saved=JSON.parse(localStorage.getItem(key)||"null");if(Array.isArray(saved))return saved;}catch{}
 if(DEMO_MODE){const samples=createDemoVehicles();localStorage.setItem(DEMO_STORAGE_KEY,JSON.stringify(samples));return samples;}
 try{const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");return Array.isArray(data)?data:[];}catch{return [];}
}
function saveVehicles(){localStorage.setItem(DEMO_MODE?DEMO_STORAGE_KEY:STORAGE_KEY,JSON.stringify(vehicles));}
function escapeHtml(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
function showGarage(){selectedVehicleId=null;$("#carProfileSection").hidden=true;$("#garageSection").hidden=false;}
function openProfile(id){const car=vehicles.find(item=>item.id===id);if(!car)return;selectedVehicleId=id;$("#garageSection").hidden=true;$("#carFormSection").hidden=true;$("#carProfileSection").hidden=false;renderProfile(car);window.scrollTo({top:0,behavior:"smooth"});}
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
 const total=entries.reduce((sum,item)=>sum+(Number(item.amount)||0),0);
 $("#expenseTotal").textContent=formatMoney(total);
 const categoryKeys=["repair","maintenance","parts","tyres","insurance","taxes","other"];
 $("#expenseHistory").innerHTML=entries.length?entries.map(item=>'<article class="expense-entry"><div><strong>'+escapeHtml(item.date)+' · '+escapeHtml(t(categoryKeys.includes(item.category)?item.category:"other"))+'</strong><small>'+escapeHtml(item.description||t("notSet"))+(item.odometer!==""&&item.odometer!=null?' · '+escapeHtml(item.odometer)+' km':"")+'</small></div><div class="expense-entry-values"><strong>'+formatMoney(Number(item.amount)||0)+'</strong><button class="expense-delete" type="button" data-delete-expense="'+escapeHtml(item.id)+'">'+t("deleteExpense")+'</button></div></article>').join(""):'<p class="empty-fuel">'+t("emptyExpenses")+'</p>';
}
function renderProfile(car){
  $("#profileTitle").textContent=(car.make+" "+car.model).trim();
  $("#profileRegistration").textContent=car.registration||"";
  const fields=[["year",car.year],["engine",car.engine],["fuel",car.fuel],["power",car.power],["transmission",car.transmission],["vin",car.vin],["mileage",car.mileage],["color",car.color]];
  $("#profileDetails").innerHTML=fields.map(([key,value])=>`<div class="detail-item"><span>${t(key)}</span><strong>${escapeHtml(value||t("notSet"))}</strong></div>`).join("");
  renderFuel(car);
  renderExpenses(car);
}
function render(){
  document.documentElement.lang=language;
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n);});
  renderLanguageOptions();renderFuelOptions();
  const demoNotice=$("#demoNotice");if(demoNotice)demoNotice.hidden=!DEMO_MODE;
  $("#carCount").textContent=vehicles.length+" / 3";
  $("#carList").innerHTML=vehicles.length?vehicles.map(car=>`<article class="car-card" data-open-profile="${escapeHtml(car.id)}" tabindex="0" role="button" aria-label="${t("profile")}: ${escapeHtml(car.make)} ${escapeHtml(car.model)}"><div class="car-card-top"><div class="car-symbol" aria-hidden="true">🚗</div><div class="car-actions"><button class="edit-button" type="button" data-edit="${escapeHtml(car.id)}" aria-label="${t("edit")}" title="${t("edit")}">✎</button><button class="delete-button" type="button" data-delete="${escapeHtml(car.id)}" aria-label="${t("remove")}" title="${t("remove")}">×</button></div></div><h3>${escapeHtml(car.make)} ${escapeHtml(car.model)}</h3><p class="car-meta">${car.year?escapeHtml(car.year):t("unknownYear")}</p><span class="car-registration">${escapeHtml((car.registration||"").toUpperCase())}</span><p class="card-hint">${t("tapProfile")}</p></article>`).join(""):`<div class="empty-state">${t("empty")}</div>`;
  $("#addCarButton").disabled=vehicles.length>=3;
  $("#limitNote").hidden=vehicles.length>=3;
  if(!$("#carFormSection").hidden){$("#carFormTitle").textContent=t(editingVehicleId?"editCar":"newCar");$("#carFormSubmit").textContent=t(editingVehicleId?"updateCar":"saveCar");}
}
function openForm(){if(vehicles.length>=3){alert(t("limitReached"));return;}editingVehicleId=null;$("#carForm").reset();$("#carFormSection").hidden=false;$("#carProfileSection").hidden=true;render();$("#carForm").elements.make.focus();}
function editVehicle(id){
  const car=vehicles.find(item=>item.id===id);if(!car)return;
  selectedVehicleId=id;editingVehicleId=id;
  ["make","model","registration","year","engine","fuel","power","transmission","vin","mileage","color"].forEach(key=>$("#carForm").elements[key].value=car[key]||"");
  $("#garageSection").hidden=false;$("#carProfileSection").hidden=true;$("#carFormSection").hidden=false;render();$("#carForm").elements.make.focus();
}
function closeForm(){editingVehicleId=null;$("#carFormSection").hidden=true;$("#carForm").reset();}
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
 saveVehicles();$("#fuelForm").reset();$("#fuelDate").value=new Date().toISOString().slice(0,10);$("#fuelTotal").value="";renderProfile(car);
});
$("#expenseForm").addEventListener("submit",event=>{
 event.preventDefault();const car=vehicles.find(item=>item.id===selectedVehicleId);if(!car)return;
 const amount=Number($("#expenseAmount").value),odometer=$("#expenseOdometer").value;
 if(!(amount>0)||!Number.isFinite(amount)){alert(t("invalidData"));return;}
 car.expenses=Array.isArray(car.expenses)?car.expenses:[];
 car.expenses.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),date:$("#expenseDate").value,category:$("#expenseCategory").value,description:$("#expenseDescription").value.trim(),amount:Number(amount.toFixed(2)),odometer});
 saveVehicles();$("#expenseForm").reset();$("#expenseDate").value=new Date().toISOString().slice(0,10);renderProfile(car);
});
$("#expenseHistory").addEventListener("click",event=>{
 const button=event.target.closest("[data-delete-expense]");if(!button)return;
 const car=vehicles.find(item=>item.id===selectedVehicleId);if(!car||!confirm(t("confirmDeleteExpense")))return;
 car.expenses=(car.expenses||[]).filter(item=>item.id!==button.dataset.deleteExpense);saveVehicles();renderExpenses(car);
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
  const deleteButton=event.target.closest("[data-delete]");if(deleteButton){event.stopPropagation();if(!confirm(t("confirmDelete")))return;vehicles=vehicles.filter(car=>car.id!==deleteButton.dataset.delete);saveVehicles();render();return;}
  const card=event.target.closest("[data-open-profile]");if(card)openProfile(card.dataset.openProfile);
});
$("#carList").addEventListener("keydown",event=>{if((event.key==="Enter"||event.key===" ")&&event.target.matches("[data-open-profile]")){event.preventDefault();openProfile(event.target.dataset.openProfile);}});
if("serviceWorker" in navigator&&location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
render();
