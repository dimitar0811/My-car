const STORAGE_KEY = "my-car-vehicles-v1";
const translations = {
  bg: {eyebrow:"ТВОЯТ АВТОМОБИЛЕН ПОМОЩНИК",heading:"Всичко за автомобила. На едно място.",subtitle:"Следи автомобилите си, разходите и предстоящото обслужване лесно.",garage:"ГАРАЖ",yourCars:"Твоите автомобили",addCar:"Добави автомобил",limitNote:"Основната версия позволява до 3 автомобила.",newCar:"Нов автомобил",editCar:"Редактирай автомобил",make:"Марка",model:"Модел",registration:"Регистрационен номер",year:"Година",saveCar:"Запази автомобила",updateCar:"Запази промените",edit:"Редактирай",footer:"Твоят автомобилен дневник",empty:"Все още нямаш добавени автомобили. Започни, като добавиш първия си автомобил.",remove:"Изтрий автомобила",confirmDelete:"Сигурен ли си, че искаш да изтриеш този автомобил?",car:"Автомобил",limitReached:"Достигна лимита от 3 автомобила.",unknownYear:"Годината не е посочена.",back:"← Обратно към гаража",profile:"Профил на автомобила",engine:"Двигател",fuel:"Гориво",power:"Мощност",transmission:"Скоростна кутия",vin:"VIN номер",mileage:"Пробег (км)",color:"Цвят",notSet:"Не е посочено",saveDetails:"Запази данните"},
  en: {eyebrow:"YOUR CAR COMPANION",heading:"Everything about your car. In one place.",subtitle:"Easily track your vehicles, expenses and upcoming maintenance.",garage:"GARAGE",yourCars:"Your vehicles",addCar:"Add a vehicle",limitNote:"The basic version supports up to 3 vehicles.",newCar:"New vehicle",editCar:"Edit vehicle",make:"Make",model:"Model",registration:"Registration number",year:"Year",saveCar:"Save vehicle",updateCar:"Save changes",edit:"Edit",footer:"Your vehicle logbook",empty:"You have not added any vehicles yet. Start by adding your first car.",remove:"Delete vehicle",confirmDelete:"Are you sure you want to delete this vehicle?",car:"Vehicle",limitReached:"You have reached the 3-vehicle limit.",unknownYear:"Year not provided.",back:"← Back to garage",profile:"Vehicle profile",engine:"Engine",fuel:"Fuel type",power:"Power",transmission:"Transmission",vin:"VIN",mileage:"Mileage (km)",color:"Colour",notSet:"Not provided",saveDetails:"Save details"}
};
let language = localStorage.getItem("my-car-language") || "bg";
let vehicles = loadVehicles();
let editingVehicleId = null;
let selectedVehicleId = null;
const $ = (selector) => document.querySelector(selector);
function t(key){return translations[language][key] || key;}
function loadVehicles(){try{const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");return Array.isArray(data)?data:[];}catch{return [];}}
function saveVehicles(){localStorage.setItem(STORAGE_KEY,JSON.stringify(vehicles));}
function escapeHtml(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
function showGarage(){selectedVehicleId=null;$("#carProfileSection").hidden=true;$("#garageSection").hidden=false;}
function openProfile(id){const car=vehicles.find(item=>item.id===id);if(!car)return;selectedVehicleId=id;$("#garageSection").hidden=true;$("#carFormSection").hidden=true;$("#carProfileSection").hidden=false;renderProfile(car);window.scrollTo({top:0,behavior:"smooth"});}
function formatMoney(value){return new Intl.NumberFormat(language==="bg"?"bg-BG":"en-GB",{style:"currency",currency:"EUR"}).format(value);}
function fuelStats(car){
 const log=[...(car.fuelLog||[])].sort((a,b)=>a.odometer-b.odometer);let previous=null,litres=0,stats={};
 for(const entry of log){litres+=Number(entry.litres)||0;if(entry.fullTank){if(previous){const km=Number(entry.odometer)-Number(previous.odometer);if(km>0)stats[entry.id]=litres/km*100;}previous=entry;litres=0;}}
 return stats;
}
function renderFuel(car){
 const log=[...(car.fuelLog||[])].sort((a,b)=>b.date.localeCompare(a.date)),stats=fuelStats(car);
 $("#fuelHistory").innerHTML=log.length?log.map(entry=>'<article class="fuel-entry"><div><strong>'+escapeHtml(entry.date)+' · '+escapeHtml(entry.fuelType)+'</strong><small>'+escapeHtml(entry.odometer)+' km'+(entry.fullTank?' · '+(language==="bg"?"Пълен резервоар":"Full tank"):"")+'</small></div><div class="fuel-entry-values"><strong>'+escapeHtml(entry.litres)+' L</strong><span>'+formatMoney(Number(entry.total)||0)+'</span></div>'+(stats[entry.id]?'<p class="fuel-consumption">'+(language==="bg"?"Разход":"Consumption")+': '+stats[entry.id].toFixed(2)+' L/100 km</p>':"")+'</article>').join(""):'<p class="empty-fuel">'+(language==="bg"?"Все още няма записани зареждания.":"No fuel entries yet.")+'</p>';
 const values=Object.values(stats);$("#averageConsumption").textContent=values.length?(values.reduce((sum,value)=>sum+value,0)/values.length).toFixed(2)+" L/100 km":t("notSet");
}
function renderProfile(car){
  $("#profileTitle").textContent=(car.make+" "+car.model).trim();
  $("#profileRegistration").textContent=car.registration||"";
  const fields=[["year",car.year],["engine",car.engine],["fuel",car.fuel],["power",car.power],["transmission",car.transmission],["vin",car.vin],["mileage",car.mileage],["color",car.color]];
  $("#profileDetails").innerHTML=fields.map(([key,value])=>`<div class="detail-item"><span>${t(key)}</span><strong>${escapeHtml(value||t("notSet"))}</strong></div>`).join("");
  renderFuel(car);
}
function render(){
  document.documentElement.lang=language;
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n);});
  $("#languageToggle").textContent=language==="bg"?"EN":"БГ";
  $("#carCount").textContent=vehicles.length+" / 3";
  $("#carList").innerHTML=vehicles.length?vehicles.map(car=>`<article class="car-card" data-open-profile="${escapeHtml(car.id)}" tabindex="0" role="button" aria-label="${t("profile")}: ${escapeHtml(car.make)} ${escapeHtml(car.model)}"><div class="car-card-top"><div class="car-symbol" aria-hidden="true">🚗</div><div class="car-actions"><button class="edit-button" type="button" data-edit="${escapeHtml(car.id)}" aria-label="${t("edit")}" title="${t("edit")}">✎</button><button class="delete-button" type="button" data-delete="${escapeHtml(car.id)}" aria-label="${t("remove")}" title="${t("remove")}">×</button></div></div><h3>${escapeHtml(car.make)} ${escapeHtml(car.model)}</h3><p class="car-meta">${car.year?escapeHtml(car.year):t("unknownYear")}</p><span class="car-registration">${escapeHtml((car.registration||"").toUpperCase())}</span><p class="card-hint">${language==="bg"?"Натисни за профил →":"Tap to view profile →"}</p></article>`).join(""):`<div class="empty-state">${t("empty")}</div>`;
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
$("#languageToggle").addEventListener("click",()=>{language=language==="bg"?"en":"bg";localStorage.setItem("my-car-language",language);render();if(selectedVehicleId){const car=vehicles.find(item=>item.id===selectedVehicleId);if(car)renderProfile(car);}});
$("#addCarButton").addEventListener("click",openForm);
$("#closeForm").addEventListener("click",closeForm);
$("#backToGarage").addEventListener("click",showGarage);
$("#profileEdit").addEventListener("click",()=>{if(selectedVehicleId)editVehicle(selectedVehicleId);});
$("#fuelDate").value=new Date().toISOString().slice(0,10);
function calculateFuelTotal(){const litres=Number($("#fuelLitres").value),price=Number($("#fuelPrice").value);$("#fuelTotal").value=litres>0&&price>0?(litres*price).toFixed(2):"";}
$("#fuelLitres").addEventListener("input",calculateFuelTotal);$("#fuelPrice").addEventListener("input",calculateFuelTotal);
$("#fuelForm").addEventListener("submit",event=>{
 event.preventDefault();const car=vehicles.find(item=>item.id===selectedVehicleId);if(!car)return;
 const litres=Number($("#fuelLitres").value),price=Number($("#fuelPrice").value),odometer=Number($("#fuelOdometer").value);
 if(!(litres>0&&price>0&&odometer>=0)){alert(language==="bg"?"Провери въведените данни.":"Check the entered values.");return;}
 car.fuelLog=Array.isArray(car.fuelLog)?car.fuelLog:[];
 const max=Math.max(-1,...car.fuelLog.map(item=>Number(item.odometer)));
 if(odometer<max){alert(language==="bg"?"Пробегът не може да е по-малък от последния запис.":"Mileage cannot be lower than the latest entry.");return;}
 car.fuelLog.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),date:$("#fuelDate").value,fuelType:$("#fuelType").value,litres,pricePerLitre:price,total:Number((litres*price).toFixed(2)),odometer,fullTank:$("#fuelFullTank").checked});
 saveVehicles();$("#fuelForm").reset();$("#fuelDate").value=new Date().toISOString().slice(0,10);$("#fuelTotal").value="";renderProfile(car);
});
$("#carForm").addEventListener("submit",event=>{
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  const fields=["make","model","registration","year","engine","fuel","power","transmission","vin","mileage","color"];
  const values=Object.fromEntries(fields.map(key=>[key,String(form.get(key)||"").trim()]));
  if(!values.make||!values.model||!values.registration)return;
  if(values.year&&(!/^\d{4}$/.test(values.year)||Number(values.year)<1900||Number(values.year)>2100)){alert(language==="bg"?"Въведи валидна година между 1900 и 2100.":"Enter a valid year between 1900 and 2100.");return;}
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
