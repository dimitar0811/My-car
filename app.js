const STORAGE_KEY = "my-car-vehicles-v1";
const translations = {
  bg: {eyebrow:"ТВОЯТ АВТОМОБИЛЕН ПОМОЩНИК",heading:"Всичко за автомобила. На едно място.",subtitle:"Следи автомобилите си, разходите и предстоящото обслужване лесно.",garage:"ГАРАЖ",yourCars:"Твоите автомобили",addCar:"Добави автомобил",limitNote:"Основната версия позволява до 3 автомобила.",newCar:"Нов автомобил",editCar:"Редактирай автомобил",make:"Марка",model:"Модел",registration:"Регистрационен номер",year:"Година",saveCar:"Запази автомобила",updateCar:"Запази промените",edit:"Редактирай",footer:"Твоят автомобилен дневник",empty:"Все още нямаш добавени автомобили. Започни, като добавиш първия си автомобил.",remove:"Изтрий автомобила",confirmDelete:"Сигурен ли си, че искаш да изтриеш този автомобил?",car:"Автомобил",limitReached:"Достигна лимита от 3 автомобила.",unknownYear:"Годината не е посочена."},
  en: {eyebrow:"YOUR CAR COMPANION",heading:"Everything about your car. In one place.",subtitle:"Easily track your vehicles, expenses and upcoming maintenance.",garage:"GARAGE",yourCars:"Your vehicles",addCar:"Add a vehicle",limitNote:"The basic version supports up to 3 vehicles.",newCar:"New vehicle",editCar:"Edit vehicle",make:"Make",model:"Model",registration:"Registration number",year:"Year",saveCar:"Save vehicle",updateCar:"Save changes",edit:"Edit",footer:"Your vehicle logbook",empty:"You have not added any vehicles yet. Start by adding your first car.",remove:"Delete vehicle",confirmDelete:"Are you sure you want to delete this vehicle?",car:"Vehicle",limitReached:"You have reached the 3-vehicle limit.",unknownYear:"Year not provided."}
};
let language = localStorage.getItem("my-car-language") || "bg";
let vehicles = loadVehicles();
let editingVehicleId = null;
const $ = (selector) => document.querySelector(selector);
function t(key){return translations[language][key] || key;}
function loadVehicles(){try{const data=JSON.parse(localStorage.getItem(STORAGE_KEY)||"[]");return Array.isArray(data)?data:[];}catch{return [];}}
function saveVehicles(){localStorage.setItem(STORAGE_KEY,JSON.stringify(vehicles));}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char]));}
function render(){
  document.documentElement.lang=language;
  document.querySelectorAll("[data-i18n]").forEach(el=>{el.textContent=t(el.dataset.i18n);});
  $("#languageToggle").textContent=language==="bg"?"EN":"БГ";
  $("#carCount").textContent=vehicles.length+" / 3";
  $("#carList").innerHTML=vehicles.length?vehicles.map(car=>`<article class="car-card"><div class="car-card-top"><div class="car-symbol" aria-hidden="true">🚗</div><div class="car-actions"><button class="edit-button" type="button" data-edit="${escapeHtml(car.id)}" aria-label="${t("edit")}" title="${t("edit")}">✎</button><button class="delete-button" type="button" data-delete="${escapeHtml(car.id)}" aria-label="${t("remove")}" title="${t("remove")}">×</button></div></div><h3>${escapeHtml(car.make)} ${escapeHtml(car.model)}</h3><p class="car-meta">${car.year?escapeHtml(car.year):t("unknownYear")}</p><span class="car-registration">${escapeHtml(car.registration.toUpperCase())}</span></article>`).join(""):`<div class="empty-state">${t("empty")}</div>`;
  $("#addCarButton").disabled=vehicles.length>=3;
  $("#limitNote").hidden=vehicles.length>=3;
  if(!$("#carFormSection").hidden){
    $("#carFormTitle").textContent=t(editingVehicleId?"editCar":"newCar");
    $("#carFormSubmit").textContent=t(editingVehicleId?"updateCar":"saveCar");
  }
}
function openForm(){if(vehicles.length>=3){alert(t("limitReached"));return;}editingVehicleId=null;$("#carForm").reset();$("#carFormSection").hidden=false;render();$("#carForm").elements.make.focus();}
function editVehicle(id){
  const car=vehicles.find(item=>item.id===id);if(!car)return;
  editingVehicleId=id;
  $("#carForm").elements.make.value=car.make||"";
  $("#carForm").elements.model.value=car.model||"";
  $("#carForm").elements.registration.value=car.registration||"";
  $("#carForm").elements.year.value=car.year||"";
  $("#carFormSection").hidden=false;render();$("#carForm").elements.make.focus();
}
function closeForm(){editingVehicleId=null;$("#carFormSection").hidden=true;$("#carForm").reset();}
$("#languageToggle").addEventListener("click",()=>{language=language==="bg"?"en":"bg";localStorage.setItem("my-car-language",language);render();});
$("#addCarButton").addEventListener("click",openForm);
$("#closeForm").addEventListener("click",closeForm);
$("#carForm").addEventListener("submit",event=>{
  event.preventDefault();
  const form=new FormData(event.currentTarget);
  const make=String(form.get("make")||"").trim(),model=String(form.get("model")||"").trim(),registration=String(form.get("registration")||"").trim(),year=String(form.get("year")||"").trim();
  if(!make||!model||!registration)return;
  if(year && (!/^\d{4}$/.test(year) || Number(year)<1900 || Number(year)>2100)){alert(language==="bg"?"Въведи валидна година между 1900 и 2100.":"Enter a valid year between 1900 and 2100.");return;}
  if(editingVehicleId){
    const index=vehicles.findIndex(car=>car.id===editingVehicleId);if(index<0)return;
    vehicles[index]={...vehicles[index],make,model,registration,year};
  }else{
    if(vehicles.length>=3){alert(t("limitReached"));return;}
    vehicles.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),make,model,registration,year});
  }
  saveVehicles();closeForm();render();
});
$("#carList").addEventListener("click",event=>{
  const editButton=event.target.closest("[data-edit]");
  if(editButton){editVehicle(editButton.dataset.edit);return;}
  const button=event.target.closest("[data-delete]");if(!button)return;
  if(!confirm(t("confirmDelete")))return;
  vehicles=vehicles.filter(car=>car.id!==button.dataset.delete);saveVehicles();render();
});
if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
render();