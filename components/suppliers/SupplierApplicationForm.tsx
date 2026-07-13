
"use client";

import { Upload, Send, Lock } from "lucide-react";

const businessTypes=[
"Manufacturer","Wholesaler","Distributor","Importer","Farmer","Food Producer","Beverage Supplier","FMCG","Packaging","Cleaning Products","Technology","Construction","Logistics","Professional Services","Other"
];

const provinces=[
"National","Eastern Cape","Free State","Gauteng","KwaZulu-Natal","Limpopo","Mpumalanga","North West","Northern Cape","Western Cape"
];

const years=[
"Less than 1 Year","1–3 Years","4–7 Years","8–15 Years","15+ Years"
];

export default function SupplierApplicationForm(){
const input="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-zinc-500 outline-none focus:border-yellow-400";
const select="w-full rounded-2xl border border-white/10 bg-[#111111] px-5 py-4 text-white outline-none focus:border-yellow-400";

return(
<section id="supplier-application" className="bg-[#050505] py-28">
<div className="mx-auto max-w-7xl px-6">
<div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">

<div className="text-center">
<p className="text-xs font-semibold uppercase tracking-[0.35em] text-yellow-400">Supplier Application</p>
<h2 className="mt-5 text-4xl md:text-5xl font-bold text-white">Let's Build Together.</h2>
<p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
Tell us about your business and how you'd like to partner with KASI QUICKSHOP.
</p>
</div>

<form className="mt-12 grid gap-8 xl:grid-cols-4">

<div className="space-y-4">
<h3 className="text-xl font-semibold text-white">Company Information</h3>
<input className={input} placeholder="Company Name"/>
<input className={input} placeholder="Registration Number"/>
<input className={input} placeholder="Contact Person"/>
<input className={input} placeholder="Position"/>
<input className={input} placeholder="Email Address"/>
<input className={input} placeholder="Phone Number"/>
</div>

<div className="space-y-4">
<h3 className="text-xl font-semibold text-white">Business Information</h3>

<select className={select}>
<option className="bg-[#111111]">Business Type</option>
{businessTypes.map(v=><option key={v} className="bg-[#111111]">{v}</option>)}
</select>

<textarea rows={5} className={input} placeholder="Products / Services"/>

<select className={select}>
<option className="bg-[#111111]">Provinces Served</option>
{provinces.map(v=><option key={v} className="bg-[#111111]">{v}</option>)}
</select>

<select className={select}>
<option className="bg-[#111111]">Years in Business</option>
{years.map(v=><option key={v} className="bg-[#111111]">{v}</option>)}
</select>

</div>

<div className="space-y-4">
<h3 className="text-xl font-semibold text-white">Upload Documents</h3>

<label className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 hover:border-yellow-400/40">
<Upload className="mb-3 h-8 w-8 text-yellow-400"/>
<span className="text-white">Company Profile</span>
<span className="text-sm text-zinc-500">PDF, DOC, DOCX</span>
<input type="file" className="hidden"/>
</label>

<label className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/10 hover:border-yellow-400/40">
<Upload className="mb-3 h-8 w-8 text-yellow-400"/>
<span className="text-white">Product Catalogue</span>
<span className="text-sm text-zinc-500">PDF, DOC, DOCX</span>
<input type="file" className="hidden"/>
</label>

</div>

<div className="space-y-4">
<h3 className="text-xl font-semibold text-white">Additional Information</h3>

<textarea
rows={12}
className={input}
placeholder="Tell us about your company and how you'd like to partner with KASI QUICKSHOP."
/>

<p className="flex items-center gap-2 text-sm text-zinc-500">
<Lock className="h-4 w-4"/>
Your information will remain confidential.
</p>

<button
type="submit"
className="mt-4 inline-flex w-full items-center justify-center rounded-2xl bg-yellow-400 px-8 py-4 text-lg font-semibold text-black transition hover:bg-yellow-300">
Submit Supplier Application
<Send className="ml-3 h-5 w-5"/>
</button>

</div>

</form>

</div>
</div>
</section>
);
}
