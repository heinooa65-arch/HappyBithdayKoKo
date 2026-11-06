const memories = [
  { title: "Taung Gyi Trip", subtitle: "Firstever trip together", emoji: "🧸", image: "TaungGyi.jpg", text: "ပထမဆုံး တူတူ trip သွားရဖို့တော်တော် ကြိုးပမ်းရတဲ့အပြင် အကိုလေးက ချေတာ ကမ်းကုန်ရောပဲ ဒီပုံလေးရဖို့တောင် တော်တော် ပင့်ယူရတယ်ဟေ" },
  { title: "who's that", subtitle: "guess who?", emoji: "🕵️", image: "him.jpg", text: "သူပါပေါ့ အရမ်း fine တဲ့ ဘဲကြီးပါလားဆိုပြီး ကြွေခဲ့ရသေး, တကယ်တမ်းရလာာတော့ online ကမှာတဲ့ အတိုင်းလဲမရဘူး Oversized မောင်မောင့် ကလေးလေးရောက်လာ " },
  { title: "X pote", subtitle: "Kyone yin kyone ta lo x nai lonn dl", emoji: "☂️", image: "xpote.jpg", text: "နေရာတိုင်းအိပ် စောင့်ရလဲ အိပ် မစောင့်ရလဲ အိပ် တက်ဆီ စီးလဲ အိပ်် ဘယ်နေရာမဆို အိပ်နိုင်လွန်းသူ" },
  { title: "that Smileee", subtitle: "Cx pho kg thw pl", emoji: "🏫", image: "Cho.jpg", text: "မိုနာလီဆာ တောင် အရှုံးပေးရတဲ့ အပြုံးနဲ့ မောင်မောင့် ကိုကို ပါခင်ဗျာ နီကိုလီဆာ အပြုံးကြောင့် ရင်ခုံဖင်တုန်ရသေးး" },
  { title: "final snap :3", subtitle: "one last picture", emoji: "📷", image: "snap.jpg", text: "အရမ်းချောသောပဲ ပန်းကပန်ထားသေးတယ် နူးညံ့လွန်းသော ကိုမဲ" },
  { title: "Graduation!!!", subtitle: "Bad Hair dayy", emoji: "💗", image: "Graduation.jpg", text: "အရမ်းလှချင်သောပဲ မပြောနိုင်တော့ဘူး ဆံပင်ပြင်တာ ၁၈၂ ခါ သူက စိတ်ကောက်ရသေး စကားက နားမထောင် ရိုက်ချင်စရာကောင်" }
];

const grid = document.getElementById("memoryGrid");
const modal = document.getElementById("modal");

// Render Memory Cards dynamically
memories.forEach((memory, index) => {
  const card = document.createElement("button");
  card.className = "memory";
  card.type = "button";
  card.innerHTML = `
    <span class="number">0${index + 1}</span>
    <div class="memory-art">${memory.image ? `<img src="${memory.image}" alt="${memory.title}">` : memory.emoji}</div>
    <h3>${memory.title}</h3>
    <small>${memory.subtitle}</small>
  `;
  card.addEventListener("click", () => openMemory(memory));
  grid.appendChild(card);
});

function openMemory(memory) {
  document.getElementById("modalEyebrow").textContent = "a little memory";
  document.getElementById("modalTitle").textContent = memory.title;
  document.getElementById("modalText").textContent = memory.text;
  const imageArea = document.getElementById("modalImage");
  imageArea.innerHTML = memory.image ? `<img src="${memory.image}" alt="" style="width:100%;border-radius:12px;margin-top:12px">` : "";
  modal.classList.add("open");
}

function closeModal() {
  modal.classList.remove("open");
}

document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", event => {
  if (event.target === modal) closeModal();
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

// Open Letter with Confetti Celebration
document.getElementById("openLetter").addEventListener("click", () => {
  document.getElementById("modalEyebrow").textContent = "a little note";
  document.getElementById("modalTitle").textContent = "Happy Birthday!";
  document.getElementById("modalText").textContent =
    "Dear KoKo,\n\nHappy 25th Birthday ပါ မောင်မောင့် ချစ်ဆုံးလေး မွေးနေ့က စပြီး တောင်းသမျှ လိုသမျှ ပြည့်စုံကြွယ်ဝသော ဘဝကိုပိုင်ဆိုင်နိုင်ပါစေ, ကိုယ်ပိုင် ဝင်ငွေများ ရေကဲ့သို့ သုံးနိုင်ပါစေခင်ဗျာ, အရေးကြီးဆုံးကတော့ ဘိုးဘိုးလေး ဖြစ်လာပြီဆိုတော့ ကျန်းမာရေးမှာလဲ မည်သို့သော ဝေဒနာမျှ ပင်မဆွဲကပ်နိုင်အောင် ဆုမွန်ကောင်းတောင်းပေးလိုက်ပါသည်. အဓိကက တော့ ပိုက်ဆံတေများကြီးရှာနိုင်ပါစေ။\n\n၂၅ နှစ်ပြည့်က စပြီးပျော်ရွှင်မှုများ ဒီထက်မက ပိုမိုတိုးပွားလာပါစေခင်ဗျာ၊ နိုင်ငံခြားလဲ အပူအပင်မရှိ မြန်မြန်ထွက်နိုင်ပါစေခင်ဗျာ. များကြီးမပြောတတ်တော့ဘူး ချစ်တယ်ဒါပဲ။\n\n— Aung Hein Oo";
  document.getElementById("modalImage").innerHTML = "";
  modal.classList.add("open");

  // Trigger Confetti
  if (typeof confetti === "function") {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
});

// Video Audio Toggle Control
const birthdayVideo = document.getElementById("birthdayVideo");
const toggleMuteBtn = document.getElementById("toggleMute");

if (birthdayVideo && toggleMuteBtn) {
  toggleMuteBtn.addEventListener("click", () => {
    birthdayVideo.muted = !birthdayVideo.muted;
    toggleMuteBtn.textContent = birthdayVideo.muted ? "🔊 Unmute Video" : "🔇 Mute Video";
  });
}

// Scroll Reveal Intersection Observer
const observerOptions = {
  threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".scroll-reveal").forEach(el => observer.observe(el));