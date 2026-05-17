# Le Poshe School — V3 (Real Data Edition)

A complete rebuild of the Le Poshe concept site, now grounded in real data sourced from public records.

## What changed from v2 → v3

**Real data throughout.** The address, phone numbers, email, founder name and credentials, curriculum, extracurriculars, values, mission, and Google reviews are all real. Sourced from:

- Le Poshe's existing (broken) website at leposheschool.com
- Mrs. Ronke Adeniyi's verified bio on the Women Economic Forum
- Her LinkedIn profile (linkedin.com/in/aderonkeposh)
- Her YouTube channel (@ronkeposh)
- Le Poshe's Facebook page (@leposheschool)
- Public Google Reviews
- Schools Compass, Edusko, and other Nigerian school directories

**Founder section with Mrs. Adeniyi's real photo** sourced from her Women Economic Forum public profile.

**Design upgrades:**
- New activity card grid (12 cards) replacing fake "Taekwondo photos" — each activity is a designed card with no photo accuracy problem
- New founder section with portrait, full bio, credentials block, and signature
- New values strip with the school's actual values: Christ, Passion, Integrity, Leadership
- New curriculum triad section: British / Nigerian / Montessori
- New news / events feed
- New floating Apply Now CTA
- New announcement bar
- New full-gold CTA section
- Real Google review testimonials (paraphrased)
- All 12 real extracurricular activities listed

## The strategic angle for your pitch

**Le Poshe's existing website at leposheschool.com is currently broken** — it returns a directory listing instead of a homepage. This is the pitch:

> "I rebuilt Le Poshe's website. Their existing site is broken. This is the standard of digital presence I bring."

Show this site to the Reveille MD as proof you can deliver premium work for a real Lagos business — not a hypothetical concept.

## Images

The founder photo is hot-linked from the WEF profile page. All other photos are from Unsplash CDN and load automatically.

If the founder photo ever stops loading (if WEF removes it), download it once and re-host it in an `images/` folder.

## Deploy to GitHub Pages

1. Go to `github.com/samueluchenna/leposhe-concept`
2. Delete the existing HTML files, the `css` folder, and the `js` folder
3. Drag in the new files from this v3 folder
4. Commit
5. Wait 1–2 minutes, then hard refresh: `Ctrl + Shift + R`

Your live URL stays the same: `https://samueluchenna.github.io/leposhe-concept/`

## Tech

Pure HTML + CSS + vanilla JS. Google Fonts (Fraunces + Manrope). Unsplash CDN for photography. WEF CDN for the founder image. No build step.
