
"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Check, Upload } from "lucide-react";

type Step = 1 | 2 | 3 | 4 | 5;

type FormData = {
  firstName:string;
  lastName:string;
  email:string;
  phone:string;
  province:string;
  city:string;
  profession:string;
  otherProfession:string;
  contribution:string;
  company:string;
  experience:string;
  linkedin:string;
  cv: File | null;
  motivation:string;
  value:string;
  meetings:boolean;
  collaboration:boolean;
  confidentiality:boolean;
  terms:boolean;
};

const professions = [
  "Business Owner / Entrepreneur","CEO / Executive","General Manager","Operations Manager",
  "Mechanical Engineer","Electrical Engineer","Civil Engineer","Industrial Engineer",
  "Software Engineer","IT Professional","Accountant","Financial Analyst","Attorney",
  "Architect","Marketing Professional","Retail Executive","Supply Chain Specialist",
  "Logistics Professional","Human Resources Professional","Teacher","Researcher",
  "Medical Doctor","Electrician","Plumber","Welder","Other (Please Specify)"
];

const contributions = [
  "Strategic Leadership","Investment","Technology","Manufacturing",
  "Supply Chain & Logistics","Retail Operations","Finance",
  "Marketing & Brand","Skills Development","Partnerships","Other"
];

const provinces = [
  "Eastern Cape","Free State","Gauteng","KwaZulu-Natal","Limpopo",
  "Mpumalanga","North West","Northern Cape","Western Cape"
];

export default function ApplicationForm() {
  const [step,setStep]=useState<Step>(1);

  const [formData,setFormData]=useState<FormData>({
    firstName:"",lastName:"",email:"",phone:"",
    province:"",city:"",
    profession:"",otherProfession:"",
    contribution:"",company:"",experience:"",
    linkedin:"",cv:null,
    motivation:"",value:"",
    meetings:false,collaboration:false,confidentiality:false,terms:false
  });

  const update=(e:any)=>{
    const {name,value,type,checked,files}=e.target;
    if(type==="checkbox"){
      setFormData(p=>({...p,[name]:checked}));
    }else if(type==="file"){
      setFormData(p=>({...p,cv:files?.[0]??null}));
    }else{
      setFormData(p=>({...p,[name]:value}));
    }
  };

  const next=()=>setStep(s=>Math.min(5,s+1) as Step);
  const back=()=>setStep(s=>Math.max(1,s-1) as Step);

  const steps=["Personal","Professional","Motivation","Commitment","Review"];

  return (
<section id="application" className="bg-[#050505] py-28">
<div className="mx-auto max-w-6xl px-6">
<div className="text-center max-w-3xl mx-auto">
<p className="uppercase tracking-[0.3em] text-yellow-400 text-sm font-semibold">Founding Member Application</p>
<h2 className="mt-5 text-5xl font-bold text-white">Begin Your Journey</h2>
<p className="mt-5 text-zinc-400">Complete the application to express your interest in becoming a Founding Member.</p>
</div>

<div className="mt-16 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
<div className="border-b border-white/10 p-8 flex flex-wrap gap-6 justify-between">
{steps.map((s,i)=>{
 const n=i+1;
 const active=step===n;
 const done=step>n;
 return <div key={s} className="flex items-center gap-3">
 <div className={`h-11 w-11 rounded-full border flex items-center justify-center ${done?"bg-yellow-400 text-black border-yellow-400":active?"border-yellow-400 text-yellow-400":"border-white/15 text-zinc-500"}`}>
 {done?<Check size={18}/>:n}
 </div>
 <div><p className="text-xs text-zinc-500">Step {n}</p><p className="text-white">{s}</p></div>
 </div>
})}
</div>

<div className="p-10">

{step===1 && <>
<h3 className="text-3xl text-white font-bold mb-8">Personal Information</h3>
<div className="grid md:grid-cols-2 gap-6">
{["firstName","lastName","email","phone","city"].map((f)=>(
<div key={f}>
<label className="block text-zinc-300 mb-2 capitalize">{f.replace(/([A-Z])/g," $1")}</label>
<input name={f} value={(formData as any)[f]} onChange={update} className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white"/>
</div>
))}
<div>
<label className="block text-zinc-300 mb-2">Province</label>
<select name="province" value={formData.province} onChange={update} className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white">
<option value="">Select Province</option>
{provinces.map(p=><option key={p}>{p}</option>)}
</select>
</div>
</div>
</>}

{step===2 && <>
<h3 className="text-3xl text-white font-bold mb-8">Professional Background</h3>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-zinc-300 mb-2">Profession</label>
<select name="profession" value={formData.profession} onChange={update} className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white">
<option value="">Select</option>
{professions.map(p=><option key={p}>{p}</option>)}
</select>
</div>
<div>
<label className="block text-zinc-300 mb-2">Contribution</label>
<select name="contribution" value={formData.contribution} onChange={update} className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white">
<option value="">Select</option>
{contributions.map(c=><option key={c}>{c}</option>)}
</select>
</div>
{formData.profession==="Other (Please Specify)"&&
<div className="md:col-span-2">
<label className="block text-zinc-300 mb-2">Specify Profession</label>
<input name="otherProfession" value={formData.otherProfession} onChange={update} className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white"/>
</div>}
<div><label className="block text-zinc-300 mb-2">Company</label><input name="company" value={formData.company} onChange={update} className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white"/></div>
<div><label className="block text-zinc-300 mb-2">Years Experience</label><input name="experience" value={formData.experience} onChange={update} className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white"/></div>
<div className="md:col-span-2"><label className="block text-zinc-300 mb-2">LinkedIn</label><input name="linkedin" value={formData.linkedin} onChange={update} className="w-full rounded-2xl bg-white/5 border border-white/10 px-5 py-4 text-white"/></div>
<div className="md:col-span-2">
<label className="flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-3xl p-10 cursor-pointer">
<Upload className="text-yellow-400 mb-3"/>
<span className="text-white">Upload CV</span>
<input type="file" className="hidden" onChange={update}/>
</label>
</div>
</div>
</>}

{step===3 && <>
<h3 className="text-3xl text-white font-bold mb-8">Motivation</h3>
<div className="space-y-6">
<div><label className="block mb-2 text-zinc-300">Why do you want to become a Founding Member?</label><textarea name="motivation" rows={5} value={formData.motivation} onChange={update} className="w-full rounded-2xl bg-white/5 border border-white/10 p-5 text-white"/></div>
<div><label className="block mb-2 text-zinc-300">What unique value will you bring?</label><textarea name="value" rows={5} value={formData.value} onChange={update} className="w-full rounded-2xl bg-white/5 border border-white/10 p-5 text-white"/></div>
</div>
</>}

{step===4 && <>
<h3 className="text-3xl text-white font-bold mb-8">Commitment</h3>
<div className="space-y-5 text-white">
{[
["meetings","I am available for strategic meetings."],
["collaboration","I am willing to collaborate nationally."],
["confidentiality","I agree to confidentiality requirements."],
["terms","I accept the Terms & Conditions."]
].map(([n,l])=>(
<label key={n} className="flex gap-3 items-center">
<input type="checkbox" name={n} checked={(formData as any)[n]} onChange={update}/>
<span>{l}</span>
</label>
))}
</div>
</>}

{step===5 && <>
<h3 className="text-3xl text-white font-bold mb-8">Review</h3>
<div className="grid md:grid-cols-2 gap-4 text-zinc-300">
<p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
<p><strong>Email:</strong> {formData.email}</p>
<p><strong>Profession:</strong> {formData.profession==="Other (Please Specify)"?formData.otherProfession:formData.profession}</p>
<p><strong>Contribution:</strong> {formData.contribution}</p>
</div>
<button className="mt-10 w-full rounded-2xl bg-yellow-400 py-4 font-semibold text-black hover:bg-yellow-300">
Submit Application
</button>
</>}

<div className="mt-12 flex justify-between">
<button type="button" onClick={back} disabled={step===1} className="inline-flex items-center rounded-2xl border border-white/10 px-6 py-3 text-white disabled:opacity-40">
<ArrowLeft className="mr-2" size={18}/>Back
</button>

{step<5 && (
<button type="button" onClick={next} className="inline-flex items-center rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black">
Next<ArrowRight className="ml-2" size={18}/>
</button>
)}
</div>

</div>
</div>
</div>
</section>
  );
}
