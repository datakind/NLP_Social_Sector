---
layout: default-with-mathjax
permalink: text-summarization
title: Text Summarization
include-in-navigation: true
nav-description: “What’s the TL;DR version of this text?”
---

## Text Summarization

**Extractive text summarization** is a method to pick out salient sentences in a text. Approaches weight the sentences of a document as a function of high-frequency words, while ignoring very high-frequency, common words.

Below is the text of [**California bill AB-1733 Public records: fee waiver.**](https://leginfo.legislature.ca.gov/faces/billNavClient.xhtml?bill_id=201320140AB1733) from the 2013-2014 legislative session. The official summary reads:

> _"An act to add Section 103577 to the Health and Safety Code, and to amend Section 14902 of the Vehicle Code, relating to public records."_

Reading the full text of the bill, you can see that it provides identification to homeless persons. This is lost in the title and official summary. Below, you can highlight the occurrences of two of the words that the algorithm weighs most highly as well as the top two sentences chosen for extraction. This algorithm produces the following more indicative (if awkward) extract:

> _(b) The State Department of Public Health shall develop an affidavit attesting to an applicant’s status as a homeless person or homeless child or youth._
>
> _(a) Except as otherwise provided in subdivisions (b), (c), and (d) of this section, subdivision (c) of Section 13002, and subdivision (c) of Section 14900, upon an application for an identification card a fee of twenty dollars ($20), and on and after January 1, 2010, a fee of twenty-six dollars ($26), shall be paid to the department._

Full Text:

<div class="text-summarization-controls">
  <label class="text-summarization-label">
    <input id="highlight-term-1" type="checkbox" />
    <span class="text-summarization-term-1 text-summarization-highlight">Highlight</span> occurrences of the term “homeless”
  </label>
  <label class="text-summarization-label">
    <input id="highlight-term-2" type="checkbox" />
    <span class="text-summarization-term-2 text-summarization-highlight">Highlight</span> occurrences of the term “identification card”
  </label>
  <label class="text-summarization-label">
    <input id="highlight-summary" type="checkbox" />
    <span class="text-summarization-summary text-summarization-highlight">Highlight</span> extracted summaries
  </label>
</div>

<blockquote class="text-summarization-bill-text" id="bill-text">
  <p>
    [ Approved by Governor September 29, 2014. Filed with Secretary of State September 29, 2014.&nbsp;]
  </p>
  <p>
    LEGISLATIVE COUNSEL'S DIGEST AB 1733, Quirk-Silva. Public records: fee waiver.
  </p>
  <p>
    (1) Existing law establishes the State Department of Public Health and sets forth its powers and duties, including, but not limited to, the duties as State Registrar relating to the uniform administration of provisions relating to vital records and health statistics. Existing law requires the State Registrar, local registrar, or county recorder to, upon request and payment of the required fee, supply to an applicant a certified copy of the record of a birth, fetal death, death, marriage, or marriage dissolution registered with the official.
  </p>
  <p>
    Existing law authorizes the issuance of certain records without payment of the fee.
  </p>
  <p>
    This bill would, on or after July 1, 2015, require each local registrar or county recorder to issue, without a fee, a certified record of live birth to any person who can verify his or her status as a homeless person or a homeless child or youth, as defined. The bill would require a homeless services provider, as described, that has knowledge of a person’s housing status to verify the person’s status as a homeless person or homeless child or youth for purposes of this provision. The bill would require the State Department of Public Health to develop an affidavit attesting to an applicant’s status as a homeless person or homeless child or youth, and would provide that the affidavit is sufficient verification for purposes of obtaining the certified record of live birth, as specified. By imposing additional duties on county employees, the bill would impose a state-mandated local program.
  </p>
  <p>
    (2) Existing law authorizes the Department of Motor Vehicles to issue an identification card to any person attesting to the true full name, correct age, and other identifying data as certified by the applicant for the identification card, and authorizes the assessment of related fees.
  </p>
  <p>
    This bill would, on and after January 1, 2016, require the department to issue, without a fee, an original or replacement identification card to a person who can verify his or her status as a homeless person or homeless child or youth, as defined. The bill would authorize a homeless services provider, as described, that has knowledge of a person’s housing status to verify the person’s status as a homeless person or homeless child or youth for purposes of this provision.
  </p>
  <p>
    The California Constitution requires the state to reimburse local agencies and school districts for certain costs mandated by the state. Statutory provisions establish procedures for making that reimbursement.
  </p>
  <p>
    This bill would provide that, if the Commission on State Mandates determines that the bill contains costs mandated by the state, reimbursement for those costs shall be made pursuant to these statutory provisions.
  </p>
  <p>
    Digest Key Vote: MAJORITY Appropriation: NO Fiscal Committee: YES Local Program: YES
  </p>
  <p>
    Bill Text
  </p>
  <p>
    The people of the State of California do enact as follows:
  </p>
  <p>
    SECTION 1. Section 103577 is added to the Health and Safety Code, to read:
  </p>
  <p>
    103577. (a) On or after July 1, 2015, each local registrar or county recorder shall, without a fee, issue a certified record of live birth to any person who can verify his or her status as a homeless person or a homeless child or youth. A homeless services provider that has knowledge of a person’s housing status shall verify a person’s status for the purposes of this subdivision. In accordance with all other application requirements as set forth in Section 103526, a request for a certified record of live birth made pursuant to this subdivision shall be made by a homeless person or a homeless child or youth on behalf of themselves, or by any person lawfully entitled to request a certified record of live birth on behalf of a child, if the child has been verified as a homeless person or a homeless child or youth pursuant to this section. A person applying for a certified record of live birth under this subdivision is entitled to one birth record, per application, for each eligible person verified as a homeless person or a homeless child or youth. For purposes of this subdivision, an affidavit developed pursuant to subdivision (b) shall constitute sufficient verification that a person is a homeless person or a homeless child or youth. A person applying for a certified record of live birth under this subdivision shall not be charged a fee for verification of his or her eligibility.
  </p>
  <p>
     (b) The State Department of Public Health shall develop an affidavit attesting to an applicant’s status as a homeless person or homeless child or youth. For purposes of this section, the affidavit shall not be deemed complete unless it is signed by both the person making a request for a certified record of live birth pursuant to subdivision (a) and a homeless services provider that has knowledge of the applicant’s housing status.
   </p>
   <p>
     (c) Notwithstanding the rulemaking provisions of the Administrative Procedure Act (Chapter 3.5 (commencing with Section 11340) of Part 1 of Division 3 of Title 2 of the Government Code), the department may implement and administer this section through an all-county letter or similar instructions from the director or State Registrar without taking regulatory action.
   </p>
   <p>
     (d) For the purposes of this section, the following definitions apply:
   </p>
   <p>
     (1) A “homeless child or youth” has the same meaning as the definition of “homeless children and youths” as set forth in the federal McKinney-Vento Homeless Assistance Act (42 U.S.C. Sec. 11301 et seq.).
   </p>
   <p>
     (2) A “homeless person” has the same meaning as the definition of that term set forth in the federal McKinney-Vento Homeless Assistance Act (42 U.S.C. Sec. 11301 et seq.).
   </p>
   <p>
     (3) A “homeless services provider” includes:
   </p>
   <p>
     (A) A governmental or nonprofit agency receiving federal, state, or county or municipal funding to provide services to a “homeless person” or “homeless child or youth,” or that is otherwise sanctioned to provide those services by a local homeless continuum of care organization.
   </p>
   <p>
     (B) An attorney licensed to practice law in this state.
   </p>
   <p>
     (C) A local educational agency liaison for homeless children and youth designated as such pursuant to Section 11432(g)(1)(J)(ii) of Title 42 of the United States Code, or a school social worker.
   </p>
   <p>
     (D) A human services provider or public social services provider funded by the State of California to provide homeless children or youth services, health services, mental or behavioral health services, substance use disorder services, or public assistance or employment services.
   </p>
   <p>
     (E) A law enforcement officer designated as a liaison to the homeless population by a local police department or sheriff’s department within the state.
   </p>
   <p>
     SEC. 2. Section 14902 of the Vehicle Code is amended to read:
   </p>
   <p>
     14902. (a) Except as otherwise provided in subdivisions (b), (c), and (d) of this section, subdivision (c) of Section 13002, and subdivision (c) of Section 14900, upon an application for an identification card a fee of twenty dollars ($20), and on and after January 1, 2010, a fee of twenty-six dollars ($26), shall be paid to the department.
   </p>
   <p>
     (b) An original or replacement senior citizen identification card issued pursuant to subdivision (b) of Section 13000 shall be issued free of charge.
   </p>
   <p>
     (c) The fee for an original or replacement identification card issued to a person who has been determined to have a current income level that meets the eligibility requirements for assistance programs under Chapter 2 (commencing with Section 11200) or Chapter 3 (commencing with Section 12000) of Part 3 of, or Part 5 (commencing with Section 17000) of, or Article 9 (commencing with Section 18900) of Chapter 10 of Part 6 of, or Chapter 10.1 (commencing with Section 18930) or Chapter 10.3 (commencing with Section 18937) of Part 6 of, Division 9 of the Welfare and Institutions Code shall be six dollars (\$6). The determination of eligibility under this subdivision shall be made by a governmental or nonprofit entity, which shall be subject to regulations adopted by the department.
   </p>
   <p>
     (d) On and after January 1, 2016, a fee shall not be charged for an original or replacement identification card issued to any person who can verify his or her status as a homeless person or homeless child or youth. A homeless services provider that has knowledge of the person’s housing status may verify the person’s status for purposes of this subdivision. A determination of eligibility pursuant to this subdivision shall be subject to regulations adopted by the department. A person applying for an identification card under this subdivision shall not be charged a fee for verification of his or her eligibility.
   </p>
   <p>
     (e) All fees received pursuant to this section shall be deposited in the Motor Vehicle Account.
   </p>
   <p>
     (f) For purposes of this section, the following definitions apply:
   </p>
   <p>
     (1) A “homeless child or youth” has the same meaning as the definition of “homeless children and youths” as set forth in the federal McKinney-Vento Homeless Assistance Act (42 U.S.C. Sec. 11301 et seq.).
   </p>
   <p>
     (2) A “homeless person” has the same meaning as the definition set forth in the federal McKinney-Vento Homeless Assistance Act (42 U.S.C. Sec. 11301 et seq.).
   </p>
   <p>
     (3) A “homeless services provider” includes:
   </p>
   <p>
     (A) A governmental or nonprofit agency receiving federal, state, or county or municipal funding to provide services to a “homeless person” or “homeless child or youth,” or that is otherwise sanctioned to provide those services by a local homeless continuum of care organization.
   </p>
   <p>
     (B) An attorney licensed to practice law in this state.
   </p>
   <p>
     (C) A local educational agency liaison for homeless children and youth designated as such pursuant to Section 11432 (g)(1)(J)(ii) of Title 42 of the United States Code, or a school social worker.
   </p>
   <p>
     (D) A human services provider or public social services provider funded by the State of California to provide homeless children or youth services, health services, mental or behavioral health services, substance use disorder services, or public assistance or employment services.
   </p>
   <p>
     (E) A law enforcement officer designated as a liaison to the homeless population by a local police department or sheriff’s department within the state.
   </p>
   <p>
     (F) Any other homeless services provider that is qualified to verify an individual’s housing status, as determined by the department.
   </p>
   <p>
     SEC. 3. If the Commission on State Mandates determines that this act contains costs mandated by the state, reimbursement to local agencies and school districts for those costs shall be made pursuant to Part 7 (commencing with Section 17500) of Division 4 of Title 2 of the Government Code.
  </p>
</blockquote>

<script src="{{ '/assets/js/text-summarization.js' | relative_url }}"></script>

[Sample code](https://github.com/datakind/NLP_Social_Sector/blob/master/notebooks/text_summarization.ipynb)
