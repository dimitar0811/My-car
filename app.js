const STORAGE_KEY = "my-car-vehicles-v1";
const translations = {
  bg: {eyebrow:"ТВОЯТ АВТОМОБИЛЕН ПОМОЩНИК",heading:"Всичко за автомобила. На едно място.",subtitle:"Следи автомобилите си, разходите и предстоящото обслужване лесно.",garage:"ГАРАЖ",yourCars:"Твоите автомобили",addCar:"Добави автомобил",limitNote:"Основната версия позволява до 3 автомобила.",newCar:"Нов автомобил",make:"Марка",model:"Модел",registration:"Регистрационен номер",year:"Година",saveCar:"Запази автомобила",footer:"Твоят автомобилен дневник",empty:"Все още нямаш добавени автомобили. Започни, като добавиш първия си автомобил.",remove:"Изтрий автомобила",confirmDelete:"Сигурен ли си, че искаш да изтриеш този автомобил?",car:"Автомобил",limitReached:"Достигна лимита от 3 автомобила.",unknownYear:"Годината не е посочена."},
  en: {eyebrow:"YOUR CAR COMPANION",heading:"Everything about your car. In one place.",subtitle:"Easily track your vehicles, expenses and upcoming maintenance.",garage:"GARAGE",yourCars:"Your vehicles",addCar:"Add a vehicle",limitNote:"The basic version supports up to 3 vehicles.",newCar:"New vehicle",make:"Make",model:"Model",registration:"Registration number",year:"Year",saveCar:"Save vehicle",footer:"Your vehicle logbook",empty:"You have not added any vehicles yet. Start by adding your first car.",remove:"Delete vehicle",confirmDelete:"Are you sure you want to delete this vehicle?",car:"Vehicle",limitReached:"You have reached the 3-vehicle limit.",unknownYear:"Year not provided."}
};
let language = localStorage.getItem("my-car-language") || "bg";
let vehicles = loadVehicles();
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
  $("#carList").innerHTML=vehicles.length?vehicles.map(car=>`<article class="car-card"><div class="car-card-top"><div class="car-symbol" aria-hidden="true">🚗</div><button class="delete-button" type="button" data-delete="${escapeHtml(car.id)}" aria-label="${t("remove")}" title="${t("remove")}">×</button></div><h3>${escapeHtml(car.make)} ${escapeHtml(car.model)}</h3><p class="car-meta">${car.year?escapeHtml(car.year):t("unknownYear")}</p><span class="car-registration">${escapeHtml(car.registration.toUpperCase())}</span></article>`).join(""):`<div class="empty-state">${t("empty")}</div>`;
  $("#addCarButton").disabled=vehicles.length>=3;
  $("#limitNote").hidden=vehicles.length>=3;
}
function openForm(){if(vehicles.length>=3){alert(t("limitReached"));return;}$("#carFormSection").hidden=false;$("#carForm").elements.make.focus();}
function closeForm(){$("#carFormSection").hidden=true;$("#carForm").reset();}
$("#languageToggle").addEventListener("click",()=>{language=language==="bg"?"en":"bg";localStorage.setItem("my-car-language",language);render();});
$("#addCarButton").addEventListener("click",openForm);
$("#closeForm").addEventListener("click",closeForm);
$("#carForm").addEventListener("submit",event=>{
  event.preventDefault();
  if(vehicles.length>=3){alert(t("limitReached"));return;}
  const form=new FormData(event.currentTarget);
  const make=String(form.get("make")||"").trim(),model=String(form.get("model")||"").trim(),registration=String(form.get("registration")||"").trim(),year=String(form.get("year")||"").trim();
  if(!make||!model||!registration)return;
  vehicles.push({id:crypto.randomUUID?crypto.randomUUID():String(Date.now()),make,model,registration,year});
  saveVehicles();closeForm();render();
});
$("#carList").addEventListener("click",event=>{
  const button=event.target.closest("[data-delete]");if(!button)return;
  if(!confirm(t("confirmDelete")))return;
  vehicles=vehicles.filter(car=>car.id!==button.dataset.delete);saveVehicles();render();
});
if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
render();