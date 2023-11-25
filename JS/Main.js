let $ = document;
let GenerateParagraph = $.querySelector("#GenerateParagraph");
let GenerateSentence = $.querySelector("#GenerateSentence");
let GenerateWord = $.querySelector("#GenerateWord");
let AllRadioBtns = $.querySelectorAll('input[name="Option');
let GenerateBtn = $.querySelector(".GenerateBtn");
let CopyToClipboardBtn = $.querySelector(".CopyToClipboardBtn");
let GeneratedTxt = $.querySelector(".GeneratedTxt");
let CountGenerate = $.querySelector('#CountGenerate');
let PersionSelect = $.querySelector('#PersionSelect');
let EnglishSelect = $.querySelector('#EnglishSelect');
let tooltipText = $.querySelector('.tooltipText');
const ParagraphLbl = $.querySelector('#ParagraphLbl')
const SentenceLbl = $.querySelector('#SentenceLbl')
const WordLbl = $.querySelector('#WordLbl')
const TopBar = $.querySelector('.TopBar')


//FA
let FAParagraph = "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.";

let FASentence = ["لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" , "و با استفاده از طراحان گرافیک است" , "چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است" , "و برای شرایط فعلی تکنولوژی مورد نیاز" , "و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد" , "کتابهای زیادی در شصت و سه درصد گذشته حال و آینده" , "شناخت فراوان جامعه و متخصصان را می طلبد" , "تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی" , "و فرهنگ پیشرو در زبان فارسی ایجاد کرد" , "در این صورت می توان امید داشت" , "که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد" , "و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد"];
let FAWord = ["لورم" , "ایپسوم", "متن" , "ساختگی" ,"با" , "تولید" ,"سادگی" , "نامفهوم" , "از" , "صنعت" ,"چاپ" , "چاپگرها" ,"و" ,"متون" , "بلکه" ,"روزنامه", "و" , "مجله" , "در" , "ستون" , "و" , "برای" , "شرایط" , "فعلی" , "تکنولوژی" , "مورد" , "نیاز" , "سطرآنچنان" , "که" , "لازم" , "است" , "کتابهای" , "زیادی" , "در" , "شصت" , "و" , "سه" , "درصد" , "گذشته" , "حال" , "و" , "با" , "هدف" , "بهبود" , "ابزارهای" , "کاربردی" , "می باشد" , "و" , "برای" , "شرایط" , "فعلی" , "تکنولوژی" , "مورد" , "نیاز" , "است" , "در" , "این" , "صورت" , "می توان" , "امید" ,"داشت" , "و" , "فرهنگ" , "پیشرو" , "در" , "فارسی" , "ایجاد" , "کرد" , "تا" , "با" , "نرم" ,"افزارها" , "شناخت" , "بیشتری" , "را" , "برای" , "طراحان" , "رایانه ای" , "علی الخصوص" , "طراحان", "خلاقی" , "متخصصان" , "را" , "می طلبد" , "و" , "زمان" , "مورد" , "نیاز" , "شامل" , "حروفچینی" , "دستاوردهای" , "اصلی" , "و" , "جوابگوی" , "سوالات" , "پیوسته" , "اهل" , "دنیای" , "موجود" , "طراحی" , "اساسا" , "مورد" , "که" , "تمام" , "و" , "دشواری" , "موجود" , "در" , "ارائه" , "راهکارها" , "و" , "شرایط" , "سخت" , "تایپ" , "به" , "پایان" , "رسد" , "استفاده" , "قرار" , "گیرد"];

//EN
let ENParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. Mattis pellentesque id nibh tortor id aliquet lectus proin. Sapien faucibus et molestie ac feugiat sed lectus vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Dictum varius duis at consectetur lorem. Nisi vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut tortor pretium viverra suspendisse potenti nullam. Et molestie ac feugiat sed lectus. Non nisi est sit amet facilisis magna. Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut enim blandit volutpat maecenas volutpat. Ornare lectus sit amet est placerat in egestas erat. Nisi vitae suscipit tellus mauris a diam maecenas sed. Placerat duis ultricies lacus sed turpis tincidunt id aliquet."

let ENSentence = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." , "Egestas purus viverra accumsan in nisl nisi." , "Arcu cursus vitae congue mauris rhoncus aenean vel elit sceleirsque." , "In egestas erat imperdiet sed euismod nisi porta lorem mollis." , "Morbi tristique senectus et netus." , "Mattis pellentesque id nibh tortor id aliquet lectus proin." , "Sapien faucibus et molestie ac feugiat sed lectus vestibulum." , "Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget." , "Dictum varius duis at consectetur lorem." , "Nisi vitae suscipit tellus mauris a diam maecenas sed enim." , "Velit ut tortor pretium viverra suspendisse potenti nullam." , "Et molestie ac feugiat sed lectus." , "Non nisi est sit amet facilisis magna." , "Dignissim diam quis enim lobortis scelerisque fermentum." , "Odio ut enim blandit volutpat maecenas volutpat." , "Ornare lectus sit amet est placerat in egestas erat." , "Nisi vitae suscipit tellus mauris a diam maecenas sed." , " Placerat duis ultricies lacus sed turpis tincidunt id aliquet."];

let ENWord = ["Lorem" , "ipsum" ,"dolor" ,"sit" ,"amet" ,"consectetur" ,"adipiscing" ,"elit" ,"sed" ,"do" ,"eiusmod" ,"tempor" ,"incididunt" ,"ut" ,"labore" ,"et" ,"dolore" ,"magna" ,"aliqua" ,"Egestas" ,"purus" ,"viverra" ,"accumsan" ,"in" ,"nisl" ,"nisi" ,"Arcu" ,"cursus" ,"vitae" ,"congue" ,"mauris" ,"rhoncus" ,"aenean" ,"vel" ,"elit" ,"sceleirsque" ,"In" ,"egestas" ,"erat" ,"imperdiet" ,"sed" ,"euismod" ,"nisi" ,"porta" ,"lorem" ,"mollis" ,"Morbi" ,"tristique" ,"senectus" ,"et" ,"tincidunt" ,"ornare" ,"massa" ,"eget" ,"Dictum" ,"varius" ,"duis" ,"at" ,"consectetur" ,"lorem" ,"Nisi" ,"vitae" ,"suscipit" ,"tellus" ,"mauris" ,"a" ,"diam" ,"maecenas" ,"sed" ,"enim" ,"Velit" ,"ut" ,"tortor" ,"pretium" ,"viverra" ,"suspendisse" ,"potenti" ,"nullam" ,"Et" ,"molestie" ,"ac" ,"feugiat" ,"sed" ,"lectus" ,"Non" ,"nisi" ,"sit" ,"amet" ,"facilisis" ,"magna" ,"Dignissim" ,"diam" ,"quis" ,"enim" ,"lobortis" ,"scelerisque" ,"fermentum" ,"Odio" ,"ut" ,"enim" ,"blandit" ,"volutpat" ,"maecenas" ,"volutpat" ,"Ornare" ,"lectus" ,"sit" ,"amet" ,"est" ,"placerat" ,"in" ,"egestas" ,"erat" ,"Nisi" ,"vitae" ,"suscipit" ,"tellus" ,"mauris" ,"a" ,"diam" ,"maecenas" ,"sed" ,"Placerat" ,"duis" ,"ultricies" ,"lacus" ,"sed" ,"turpis" ,"tincidunt" ,"id" ,"aliquet"]

let SentenceIndex = 0;
let WordIndex = 0;

function Ltr(){
  GeneratedTxt.style.textAlign = "left"; 
  GeneratedTxt.style.direction = "ltr"; 
}
function Clear(){
  CountGenerate.value = 1;
  GeneratedTxt.innerHTML = "";
}
function AddParagraph(){
  for(let i = 0; i < CountGenerate.value ; i++){
     if(PersionSelect.checked){
       GeneratedTxt.innerHTML += `<br> ${FAParagraph}`;
     }else if(EnglishSelect.checked){
      Ltr()
      GeneratedTxt.innerHTML += `<br> ${ENParagraph}`;
     }
  }
}
function AddSentence(){
  for(let i =0; i <= CountGenerate.value ; i++){
    SentenceIndex++;
    if(SentenceIndex < FASentence.length && PersionSelect.checked){
      GeneratedTxt.innerHTML += " " + FASentence[SentenceIndex];
    }else if(SentenceIndex < ENSentence.length && EnglishSelect.checked){
      Ltr();
      GeneratedTxt.innerHTML += " " + ENSentence[SentenceIndex];
    }else{
      SentenceIndex = 0;
    }
  }
}
function AddWord(){
  for(let i =0; i <= CountGenerate.value ; i++){
    WordIndex++;
    if(WordIndex < FAWord.length && PersionSelect.checked){
      GeneratedTxt.innerHTML += " " + FAWord[WordIndex];
    }else if(WordIndex < ENWord.length && EnglishSelect.checked){
      Ltr();
      GeneratedTxt.innerHTML += " " + ENWord[WordIndex];
    }else{
      WordIndex = 0;
    }
  }
}
function CopyToClipboard(){
  navigator.clipboard.writeText(GeneratedTxt.innerHTML);
  CopyToClipboardBtn.innerHTML = "کپی متن انجام شد."
  tooltipText.innerHTML = "کپی متن انجام شد."
  setTimeout(() => {
    CopyToClipboardBtn.innerHTML = " کپی شدن در کلیپ بورد"
  }, 1000);
}

//EventListener
AllRadioBtns.forEach((RadioBtn) => {
  RadioBtn.addEventListener('change' , (e)=> {
    if(e.target.id === "GenerateParagraph"){
      Clear();
      AddParagraph();
    }else if(e.target.id === "GenerateSentence"){
      Clear();
      AddSentence();
    }else if(e.target.id === "GenerateWord"){
      Clear();
      AddWord();
    }
  })
});
window.addEventListener('load' , ()=>{
  GeneratedTxt.innerHTML = FAParagraph;
});
PersionSelect.addEventListener('change' , ()=>{
  GeneratedTxt.style.removeProperty('text-align');
  GeneratedTxt.style.removeProperty('direction');
  GenerateParagraph.checked =true;
  ParagraphLbl.innerHTML = "پاراگراف";
  SentenceLbl.innerHTML = "جمله";
  WordLbl.innerHTML = "کلمه"
  TopBar.innerHTML = "تولید کننده لورم ایپسوم"
  document.title = "لورم ساز"
  Clear()
  AddParagraph()
});
EnglishSelect.addEventListener('change' , ()=>{
  Ltr();
  Clear();
  ParagraphLbl.innerHTML = "Paragraph";
  SentenceLbl.innerHTML = "Sentence";
  WordLbl.innerHTML = "Word"
  TopBar.innerHTML = "Generate Lorem Ipsum"
  document.title = "Generate Lorem"
  GenerateParagraph.checked =true;
  AddParagraph()
});
GenerateBtn.addEventListener('click' , ()=>{
  if(GenerateParagraph.checked){
    AddParagraph();
  }else if(GenerateSentence.checked){
    
   AddSentence();
  }else if(GenerateWord.checked){
    AddWord();
   }
})
CopyToClipboardBtn.addEventListener('click' , CopyToClipboard)