function analyzeResume(){
 const fileInput=document.getElementById('resumeInput');
 if(fileInput.files.length===0){
   alert('Please upload a resume');
   return;
 }
 const fileName=fileInput.files[0].name.toLowerCase();
 let score=50;
 const skills=['java','python','javascript','html','css','react','sql'];
 let detected=[];
 skills.forEach(skill=>{
   if(fileName.includes(skill)){
      detected.push(skill);
      score+=5;
   }
 });
 score=Math.min(score,100);
 document.getElementById('result').innerHTML=`
 <h2>Analysis Result</h2>
 <p><strong>Resume Score:</strong> ${score}/100</p>
 <p><strong>Detected Skills:</strong> ${detected.length?detected.join(', '):'No skills detected'}</p>
 <p><strong>Suggestion:</strong> Add projects, certifications, internships and achievements.</p>`;
}