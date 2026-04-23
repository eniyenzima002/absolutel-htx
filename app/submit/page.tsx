import { FormCard } from "@/components/FormCard";

export default function SubmitPage() {
  return (
//     <main className="container-shell pt-36 pb-16">
//   <FormCard
//     title="Artist Submission"
//     copy="Hi there! Thank you for supporting and submitting to perform at Absolutely HTX, a monthly music showcase for independent artists in and around Houston, TX, located at Brasil in Montrose."
//   >
//     <form className="grid gap-5 sm:grid-cols-2">
//       <label className="block">
//         <span className="mb-2 block text-sm font-semibold text-cocoa">
//           Your First & Last Name <span className="text-rose">*</span>
//         </span>
//         <input
//           className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//           placeholder="Your full name"
//         />
//       </label>

//       <label className="block">
//         <span className="mb-2 block text-sm font-semibold text-cocoa">
//           Artist/Band Name <span className="text-rose">*</span>
//         </span>
//         <input
//           className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//           placeholder="Artist or band name"
//         />
//       </label>

//       <fieldset className="block sm:col-span-2">
//         <legend className="mb-3 block text-sm font-semibold text-cocoa">
//           Do you have 15 minutes / 3 songs of original music to perform? <span className="text-rose">*</span>
//         </legend>
//         <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
//           <label className="flex items-center gap-2 text-cocoa">
//             <input type="radio" name="originalMusic" value="yes" className="accent-rose" />
//             <span>Yes</span>
//           </label>
//           <label className="flex items-center gap-2 text-cocoa">
//             <input type="radio" name="originalMusic" value="no" className="accent-rose" />
//             <span>No</span>
//           </label>
//         </div>
//       </fieldset>

//       <fieldset className="block sm:col-span-2">
//         <legend className="mb-3 block text-sm font-semibold text-cocoa">
//           Instrumentation? Please select/list all instruments and under &quot;Other&quot; specify how many musicians will play and how many vocal mics are desired, along with any additional instruments. <span className="text-rose">*</span>
//         </legend>
//         <div className="grid gap-3 sm:grid-cols-2">
//           {["Guitar", "Bass", "Drums", "Keyboard", "Vocalist", "DJ"].map((item) => (
//             <label key={item} className="flex items-center gap-2 text-cocoa">
//               <input type="checkbox" name="instrumentation" value={item} className="accent-rose" />
//               <span>{item}</span>
//             </label>
//           ))}
//         </div>
//         <label className="mt-4 block">
//           <span className="mb-2 block text-sm font-semibold text-cocoa">Other</span>
//           <input
//             className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//             placeholder="List other instruments, number of musicians, and vocal mics needed"
//           />
//         </label>
//       </fieldset>

//       <fieldset className="block sm:col-span-2">
//         <legend className="mb-3 block text-sm font-semibold text-cocoa">
//           When are you available to perform? <span className="text-rose">*</span>
//         </legend>
//         <div className="grid gap-3">
//           {[
//             "Thursday, May 21st",
//             "Thursday, June 18th",
//             "Thursday, July 16th",
//             "Thursday, August 20th",
//             "Thursday, September 17th",
//             "Interested, but have conflicts, please explain below",
//           ].map((date) => (
//             <label key={date} className="flex items-center gap-2 text-cocoa">
//               <input type="checkbox" name="availability" value={date} className="accent-rose" />
//               <span>{date}</span>
//             </label>
//           ))}
//         </div>

//         <label className="mt-4 block">
//           <span className="mb-2 block text-sm font-semibold text-cocoa">Other</span>
//           <input
//             className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//             placeholder="Add any other available date or explain conflicts"
//           />
//         </label>
//       </fieldset>

//       <label className="block">
//         <span className="mb-2 block text-sm font-semibold text-cocoa">Your IG</span>
//         <input
//           className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//           placeholder="@yourhandle"
//         />
//       </label>

//       <label className="block">
//         <span className="mb-2 block text-sm font-semibold text-cocoa">Your Website</span>
//         <input
//           className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//           placeholder="https://yourwebsite.com"
//         />
//       </label>

//       <label className="block sm:col-span-2">
//         <span className="mb-2 block text-sm font-semibold text-cocoa">Any Other Links?</span>
//         <input
//           className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//           placeholder="Spotify, SoundCloud, TikTok, etc."
//         />
//       </label>

//       <label className="block sm:col-span-2">
//         <span className="mb-2 block text-sm font-semibold text-cocoa">
//           Please include links to YouTube of you or your band performing <span className="text-rose">*</span>
//         </span>
//         <input
//           className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//           placeholder="YouTube performance link(s)"
//         />
//       </label>

//       <fieldset className="block sm:col-span-2">
//         <legend className="mb-3 block text-sm font-semibold text-cocoa">
//           Are you interested in development or recording assistance? <span className="text-rose">*</span>
//         </legend>
//         <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
//           <label className="flex items-center gap-2 text-cocoa">
//             <input type="radio" name="assistance" value="yes" className="accent-rose" />
//             <span>Yes</span>
//           </label>
//           <label className="flex items-center gap-2 text-cocoa">
//             <input type="radio" name="assistance" value="no" className="accent-rose" />
//             <span>No</span>
//           </label>
//         </div>
//       </fieldset>

//       <label className="block">
//         <span className="mb-2 block text-sm font-semibold text-cocoa">
//           Email <span className="text-rose">*</span>
//         </span>
//         <input
//           type="email"
//           className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//           placeholder="you@example.com"
//         />
//       </label>

//       <label className="block">
//         <span className="mb-2 block text-sm font-semibold text-cocoa">
//           Phone Number <span className="text-rose">*</span>
//         </span>
//         <input
//           type="tel"
//           className="w-full rounded-2xl border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//           placeholder="(123) 456-7890"
//         />
//       </label>

//       <label className="block sm:col-span-2">
//         <span className="mb-2 block text-sm font-semibold text-cocoa">
//           Tell us a little bit about yourself <span className="text-rose">*</span>
//         </span>
//         <textarea
//           rows={6}
//           className="w-full rounded-[24px] border border-cocoa/10 bg-white/70 px-4 py-3 outline-none placeholder:text-cocoa/40 focus:border-rose"
//           placeholder="Share a short bio, your style, your sound, and anything else you'd like us to know"
//         />
//       </label>

//       <div className="sm:col-span-2">
//         <button type="button" className="pill-btn bg-rose text-white hover:bg-cocoa">
//           Submit
//         </button>
//       </div>
//     </form>
//   </FormCard>
    // </main>
    
    <main className="container-shell pt-36 pb-16">
  <FormCard
    title="Artist Submission"
    copy="Hi there! Thank you for supporting and submitting to perform at Absolutely HTX, a monthly music showcase for independent artists in and around Houston, TX, located at Brasil in Montrose."
  >
    <form className="grid gap-8 sm:grid-cols-2">
      <label className="relative block">
        <input
          placeholder=" "
          className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
        />
        <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
          Your First & Last Name <span className="text-rose">*</span>
        </span>
      </label>

      <label className="relative block">
        <input
          placeholder=" "
          className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
        />
        <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
          Artist/Band Name <span className="text-rose">*</span>
        </span>
      </label>

      <fieldset className="block sm:col-span-2">
        <legend className="mb-3 block text-sm font-semibold text-butter/70">
          Do you have 15 minutes / 3 songs of original music to perform? <span className="text-rose">*</span>
        </legend>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <label className="flex items-center gap-2 text-butter/70">
            <input type="radio" name="originalMusic" value="yes" className="accent-rose" />
            <span>Yes</span>
          </label>
          <label className="flex items-center gap-2 text-butter/70">
            <input type="radio" name="originalMusic" value="no" className="accent-rose" />
            <span>No</span>
          </label>
        </div>
      </fieldset>

      <fieldset className="block sm:col-span-2">
        <legend className="mb-3 block text-sm font-semibold text-butter/70">
          Instrumentation? Please select/list all instruments and under &quot;Other&quot; specify how many musicians will play and how many vocal mics are desired, along with any additional instruments. <span className="text-rose">*</span>
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {["Guitar", "Bass", "Drums", "Keyboard", "Vocalist", "DJ"].map((item) => (
            <label key={item} className="flex items-center gap-2 text-butter/70">
              <input type="checkbox" name="instrumentation" value={item} className="accent-rose" />
              <span>{item}</span>
            </label>
          ))}
        </div>

        <label className="relative mt-4 block">
          <input
            placeholder=" "
            className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
          />
          <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
            Other
          </span>
        </label>
      </fieldset>

      <fieldset className="block sm:col-span-2">
        <legend className="mb-3 block text-sm font-semibold text-butter/70">
          When are you available to perform? <span className="text-rose">*</span>
        </legend>
        <div className="grid gap-3">
          {[
            "Thursday, May 21st",
            "Thursday, June 18th",
            "Thursday, July 16th",
            "Thursday, August 20th",
            "Thursday, September 17th",
            "Interested, but have conflicts, please explain below",
          ].map((date) => (
            <label key={date} className="flex items-center gap-2 text-butter/70">
              <input type="checkbox" name="availability" value={date} className="accent-rose" />
              <span>{date}</span>
            </label>
          ))}
        </div>

        <label className="relative mt-4 block">
          <input
            placeholder=" "
            className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
          />
          <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
            Other
          </span>
        </label>
      </fieldset>

      <label className="relative block">
        <input
          placeholder=" "
          className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
        />
        <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
          Your IG
        </span>
      </label>

      <label className="relative block">
        <input
          placeholder=" "
          className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
        />
        <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
          Your Website
        </span>
      </label>

      <label className="relative block sm:col-span-2">
        <input
          placeholder=" "
          className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
        />
        <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
          Any Other Links?
        </span>
      </label>

      <label className="relative block sm:col-span-2">
        <input
          placeholder=" "
          className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
        />
        <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
          Please include links to YouTube of you or your band performing <span className="text-rose">*</span>
        </span>
      </label>

      <fieldset className="block sm:col-span-2">
        <legend className="mb-3 block text-sm font-semibold text-butter/80">
          Are you interested in development or recording assistance? <span className="text-rose">*</span>
        </legend>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          <label className="flex items-center gap-2 text-butter/80">
            <input type="radio" name="assistance" value="yes" className="accent-rose" />
            <span>Yes</span>
          </label>
          <label className="flex items-center gap-2 text-butter/80">
            <input type="radio" name="assistance" value="no" className="accent-rose" />
            <span>No</span>
          </label>
        </div>
      </fieldset>

      <label className="relative block">
        <input
          type="email"
          placeholder=" "
          className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
        />
        <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
          Email <span className="text-rose">*</span>
        </span>
      </label>

      <label className="relative block">
        <input
          type="tel"
          placeholder=" "
          className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
        />
        <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
          Phone Number <span className="text-rose">*</span>
        </span>
      </label>

      <label className="relative block sm:col-span-2">
        <textarea
          rows={6}
          placeholder=" "
          className="peer w-full border-b border-butter/30 bg-transparent px-0 pt-6 pb-2 outline-none placeholder:text-transparent focus:border-rose focus:border-b-2"
        />
        <span className="pointer-events-none absolute left-0 top-2 text-sm font-semibold text-butter transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:font-normal peer-placeholder-shown:text-butter/50 peer-focus:top-2 peer-focus:text-sm peer-focus:font-semibold peer-focus:text-rose">
          Tell us a little bit about yourself <span className="text-rose">*</span>
        </span>
      </label>

      <div className="sm:col-span-2">
        <button type="button" className="pill-btn bg-rose text-white hover:bg-cocoa">
          Submit
        </button>
      </div>
    </form>
  </FormCard>
</main>
  );
}
