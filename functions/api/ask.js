const SOURCES = [

  {
    id: "snap",
    program: "SNAP",
    title: "Indiana FSSA — SNAP Income and Maximum Allotments",
    url: "https://www.in.gov/fssa/dfr/snap-food-assistance/income/",
    keys: [
      "snap",
      "food stamp",
      "food stamps",
      "allotment",
      "snap amount",
      "snap benefit",
      "snap benefits",
      "gross income",
      "net income",
      "deduction",
      "food assistance"
    ],
    text:
      "Indiana publishes monthly SNAP gross-income limits, net-income limits, and maximum allotments. Current FY2027 maximum monthly allotments include $306 for a one-person household, $562 for two people, $808 for three people, $1,023 for four people, $1,217 for five people, $1,463 for six people, $1,616 for seven people, and $1,841 for eight people, with $225 for each additional member. These are maximum allotments, not predicted benefits. Indiana explains that the maximum corresponds to zero net income and that greater net income generally results in a smaller SNAP benefit. Allowable deductions can include qualifying housing, child support, dependent-care, self-employment and certain elderly or disabled medical expenses."
  },

  {
    id: "snapmain",
    program: "SNAP",
    title: "Indiana FSSA — SNAP Food Assistance",
    url: "https://www.in.gov/fssa/dfr/snap-food-assistance/",
    keys: [
      "snap",
      "student",
      "work rule",
      "work requirement",
      "food assistance",
      "snap apply"
    ],
    text:
      "Indiana SNAP is administered by the Family and Social Services Administration Division of Family Resources. Eligibility can involve household composition, income, resources, student rules, work requirements, citizenship or eligible noncitizen rules, and verification. Certain higher-education students must meet an exemption in addition to other SNAP eligibility requirements. FSSA makes the official eligibility determination."
  },

  {
    id: "tanf",
    program: "TANF",
    title: "Indiana FSSA — TANF Cash Assistance",
    url: "https://www.in.gov/fssa/dfr/tanf-cash-assistance/about-tanf/",
    keys: [
      "tanf",
      "cash assistance",
      "cash benefit",
      "tanf amount",
      "tanf benefit",
      "impact",
      "caretaker",
      "child support"
    ],
    text:
      "Indiana TANF provides cash assistance and supportive services to qualifying families with children under age 18. Indiana publishes gross and net income standards and maximum monthly cash-assistance payments. Published maximum payments include $248 for an assistance group of one, $409 for two, $513 for three, $617 for four, $721 for five, $825 for six, $929 for seven, $1,033 for eight, $1,137 for nine, and $1,241 for ten, with $104 for each additional member. These are maximum amounts rather than guaranteed payments. Indiana explains that actual payments vary based on countable monthly family income. TANF also applies nonfinancial requirements including applicable residency, citizenship or immigration, employment/IMPACT and child-support requirements."
  },

  {
    id: "dfrmanual",
    program: "SNAP / TANF",
    title: "Indiana FSSA — DFR Program Policy Manual",
    url: "https://www.in.gov/fssa/dfr/forms-documents-and-tools/policy-manual/",
    keys: [
      "policy manual",
      "snap rule",
      "tanf rule",
      "resource",
      "citizenship",
      "immigration",
      "assistance group",
      "eligibility manual"
    ],
    text:
      "The Indiana Division of Family Resources Program Policy Manual contains detailed eligibility policy for SNAP and TANF. It addresses administrative policy, nonfinancial eligibility, resources, income, eligibility standards, assistance groups, budgeting, IMPACT processing, appeals and related rules. The manual is revised over time, so current policy and effective dates must be checked."
  },

  {
    id: "wic",
    program: "WIC",
    title: "Indiana Department of Health — WIC Eligibility Requirements",
    url: "https://www.in.gov/health/wic/eligibility-requirements/",
    keys: [
      "wic",
      "women infants children",
      "pregnant",
      "pregnancy",
      "breastfeeding",
      "postpartum",
      "infant",
      "nutrition",
      "wic eligibility"
    ],
    text:
      "Indiana WIC requires Indiana residency, categorical eligibility, income eligibility and nutritional risk. Categories include pregnant participants, breastfeeding participants up to the baby's first birthday, non-breastfeeding postpartum participants up to six months, infants under one year old and children under five. Nutritional risk is determined through a health and dietary assessment by a health professional during certification. Families receiving Medicaid, SNAP or TANF are income-eligible for Indiana WIC. For 2026, the monthly income guideline is $2,461 for a household of one, $3,337 for two, $4,212 for three, $5,088 for four, $5,964 for five, $6,839 for six, $7,715 for seven and $8,591 for eight, with $876 for each additional family member. A pregnant applicant counts as two for household-size purposes."
  },

  {
    id: "wicbenefit",
    program: "WIC",
    title: "Indiana Department of Health — WIC Food Package",
    url: "https://www.in.gov/health/wic/",
    keys: [
      "wic amount",
      "wic benefit",
      "wic benefits",
      "wic food",
      "wic package",
      "fruit vegetable",
      "cash value benefit",
      "cvb"
    ],
    text:
      "Indiana WIC provides supplemental healthy foods as part of prescribed food packages. Indiana currently lists fruit-and-vegetable cash-value benefits of up to $22 for infants beginning at six months, $26 for children, $48 for pregnant and postpartum participants, $52 for breastfeeding participants and $78 for fully breastfeeding multiples. These cash-value benefits are components of the WIC food package and should not be represented as the total value of WIC benefits."
  },

  {
    id: "medicaid",
    program: "Medicaid",
    title: "Indiana Medicaid — Eligibility Guide",
    url: "https://www.in.gov/medicaid/members/apply-for-medicaid/eligibility-guide/",
    keys: [
      "medicaid",
      "healthy indiana plan",
      "healthy indiana",
      "hip",
      "pregnant",
      "pregnancy",
      "disabled",
      "aged",
      "blind",
      "health insurance",
      "health coverage",
      "medical coverage"
    ],
    text:
      "Indiana Medicaid has different eligibility categories for children, pregnant individuals, adults, and aged, blind or disabled applicants. Adults may qualify through the Healthy Indiana Plan, while children and pregnant individuals may qualify through Hoosier Healthwise. Aged, blind, disabled, institutional and waiver pathways can involve additional income, resource and program-specific rules. Medicaid is health coverage rather than a monthly cash-assistance payment. The Eligibility Guide is a screening resource; an application is required for an official determination."
  },

  {
    id: "medicaidmanual",
    program: "Medicaid",
    title: "Indiana Medicaid — IHCP Eligibility Policy Manual",
    url: "https://www.in.gov/fssa/ompp/forms-documents-and-tools/medicaid-eligibility-policy-manual/",
    keys: [
      "medicaid manual",
      "ihcp",
      "medicaid policy",
      "medicaid resource",
      "waiver",
      "institutional"
    ],
    text:
      "The Indiana Health Coverage Program Eligibility Policy Manual contains detailed eligibility policy for Indiana Medicaid programs, including nonfinancial eligibility, income, resources, assistance groups, budgeting, institutional eligibility, waiver programs, Healthy Indiana Plan eligibility and appeals."
  },

  {
    id: "chip",
    program: "CHIP",
    title: "Indiana Medicaid — Hoosier Healthwise / Package C",
    url: "https://www.in.gov/medicaid/members/member-programs/hoosier-healthwise/",
    keys: [
      "chip",
      "children's health insurance",
      "package c",
      "hoosier healthwise",
      "child health",
      "child insurance"
    ],
    text:
      "Indiana administers the Children's Health Insurance Program through Hoosier Healthwise Package C. Package C provides health coverage for qualifying children under age 19 whose family income is above the applicable Medicaid Package A level but within the Package C eligibility standard. Package C can involve premiums and copayments. CHIP is health coverage rather than a cash payment."
  },

  {
    id: "liheap",
    program: "LIHEAP / EAP",
    title: "Indiana IHCDA — Energy Assistance Program",
    url: "https://www.in.gov/ihcda/homeowners-and-renters/low-income-home-energy-assistance-program-liheap/",
    keys: [
      "liheap",
      "eap",
      "energy assistance",
      "energy",
      "utility",
      "utilities",
      "electric",
      "heating",
      "disconnect",
      "energy benefit"
    ],
    text:
      "Indiana administers LIHEAP through the Energy Assistance Program, or EAP. Eligibility includes program-year income requirements and uses the applicable recent-income period. Applicants may need to provide proof of household income, utility bills or account information and other verification. Assistance is processed through Local Service Providers and Indiana's application system. The actual benefit depends on program calculations and household circumstances. The general eligibility materials do not establish one universal statewide award amount, so Qualifier must not invent one."
  },

  {
    id: "hcv",
    program: "Housing Choice Voucher",
    title: "IHCDA — Housing Choice Voucher Program",
    url: "https://www.in.gov/ihcda/homeowners-and-renters/section-8-housing-choice-vouchers-hcv/",
    keys: [
      "section 8",
      "section eight",
      "housing choice",
      "housing choice voucher",
      "voucher",
      "hcv",
      "rent assistance",
      "rental assistance",
      "waiting list"
    ],
    text:
      "The Housing Choice Voucher program provides rental assistance to qualifying households. Income limits vary by geographic area and household size under HUD rules. Housing Choice Voucher programs are administered by public housing agencies and, in applicable areas, IHCDA. Applicants may be placed on waiting lists. Meeting basic eligibility requirements does not guarantee immediate voucher availability. The amount of rental assistance depends on household income, eligible rent, payment standards, utility allowances and administering-agency calculations, so Qualifier must not invent a single statewide dollar estimate."
  },

  {
    id: "hcvplan",
    program: "Housing Choice Voucher",
    title: "IHCDA — Housing Choice Voucher Administrative Plan",
    url: "https://www.in.gov/ihcda/files/IHCDA-Admin-Plan-2026-FINAL.pdf",
    keys: [
      "hcv plan",
      "administrative plan",
      "voucher eligibility",
      "section 8 eligibility",
      "housing income",
      "very low income"
    ],
    text:
      "The IHCDA Housing Choice Voucher Administrative Plan contains detailed policies for the Housing Choice Voucher program in areas administered by IHCDA. Income limits depend on HUD income limits for the applicable geographic area and family size. The program also applies nonfinancial requirements and waiting-list policies. A single statewide income threshold or subsidy amount should not be used."
  },

  {
    id: "schoolmeals",
    program: "Free / Reduced-Price School Meals",
    title: "Indiana Department of Education — School Meal Eligibility",
    url: "https://www.in.gov/doe/nutrition/free-and-reduced-information/",
    keys: [
      "school lunch",
      "school lunches",
      "school meal",
      "school meals",
      "free lunch",
      "free meal",
      "reduced price",
      "school breakfast"
    ],
    text:
      "Indiana uses federal income eligibility guidelines for free and reduced-price school meals. Income limits vary by household size and are updated by school year. Students can also qualify through applicable categorical or direct-certification pathways. The child's school or school food authority administers the benefit. Because school meal prices and participation vary, Qualifier should not invent a universal monthly cash value."
  },

  {
    id: "directcert",
    program: "Free / Reduced-Price School Meals",
    title: "Indiana Department of Education — Direct Certification",
    url: "https://www.in.gov/doe/nutrition/free-and-reduced-information/direct-certification/",
    keys: [
      "direct certification",
      "direct certified",
      "school meal",
      "snap school",
      "tanf school",
      "medicaid school"
    ],
    text:
      "Indiana uses direct certification to identify students who may receive school meal benefits without submitting a traditional household meal application. Applicable program data matches can include SNAP, TANF, Medicaid, foster-care and other qualifying statuses under the relevant rules."
  },

  {
    id: "apply",
    program: "Multiple Programs",
    title: "Indiana FSSA — Benefits Portal",
    url: "https://fssabenefits.in.gov/",
    keys: [
      "apply",
      "application",
      "benefits portal",
      "where do i apply",
      "how do i apply",
      "documents",
      "verification",
      "interview",
      "next steps"
    ],
    text:
      "Indiana residents can use the FSSA Benefits Portal for supported programs administered by FSSA. Applications can require verification of household circumstances, income, identity, residency, resources, expenses or other program-specific facts. The administering agency makes the official eligibility determination and calculates the official benefit amount."
  }
];


/* ----------------------------------------------------
   RETRIEVAL
---------------------------------------------------- */

function normalize(value) {
  return String(value || "").toLowerCase();
}


function retrieve(question) {

  const q =
    normalize(question);

  return SOURCES
    .map(source => {

      let score = 0;

      for (const key of source.keys) {

        if (
          q.includes(
            key.toLowerCase()
          )
        ) {

          score += key.length;
        }
      }

      if (
        q.includes(
          normalize(source.program)
        )
      ) {

        score += 15;
      }

      return {
        source,
        score
      };
    })

    .filter(
      item => item.score > 0
    )

    .sort(
      (a,b) => b.score - a.score
    )

    .slice(0,6)

    .map(
      item => item.source
    );
}


/* ----------------------------------------------------
   RESPONSE HELPERS
---------------------------------------------------- */

function json(
  data,
  status = 200
) {

  return new Response(
    JSON.stringify(data),
    {
      status,
      headers: {
        "content-type":
          "application/json; charset=utf-8",

        "cache-control":
          "no-store"
      }
    }
  );
}


function extractOutputText(data) {

  if (
    data &&
    typeof data.output_text === "string" &&
    data.output_text.trim()
  ) {

    return data.output_text.trim();
  }

  let answer = "";

  if (
    data &&
    Array.isArray(data.output)
  ) {

    for (const item of data.output) {

      if (
        !item ||
        !Array.isArray(item.content)
      ) {

        continue;
      }

      for (
        const content of item.content
      ) {

        if (
          content &&
          content.type === "output_text" &&
          typeof content.text === "string"
        ) {

          answer += content.text;
        }
      }
    }
  }

  return answer.trim();
}


/* ----------------------------------------------------
   CLOUDFLARE FUNCTION
---------------------------------------------------- */

export async function onRequestPost(context) {

  try {

    const body =
      await context.request.json();

    const question =
      String(body.question || "")
      .trim()
      .slice(0,3000);

    if (!question) {

      return json(
        {
          error:
            "Question required"
        },
        400
      );
    }


    const screening =
      body.screening || null;

    const docs =
      retrieve(question);


    const resultQuestion =
      /why|my result|my results|screening|qualify|qualified|eligibility|eligible|match|matches|benefit amount|how much|next step|next steps|apply|application|documents/i
      .test(question);


    if (
      docs.length === 0 &&
      !(screening && resultQuestion)
    ) {

      return json({

        answer:
          "I cannot answer that reliably from the approved Indiana benefits material currently loaded into Qualifier. I will not guess. Please consult the relevant administering agency or add the applicable verified policy passage to Qualifier's approved knowledge base.",

        sources: [],

        grounded: false,

        ai: false
      });
    }


    if (
      !context.env.OPENAI_API_KEY
    ) {

      return json(
        {
          error:
            "Live AI service is not configured.",

          detail:
            "The Cloudflare Function cannot access the OPENAI_API_KEY environment secret."
        },
        503
      );
    }


    const evidence =
      docs.length > 0

      ? docs
        .map(
          (doc,index) =>
`SOURCE ${index + 1}
PROGRAM: ${doc.program}
TITLE: ${doc.title}

APPROVED PASSAGE:
${doc.text}

SOURCE URL:
${doc.url}`
        )
        .join("\n\n")

      : "No separate source passage was retrieved for this question.";


    const screeningTrace =
      screening && resultQuestion

      ? `

DETERMINISTIC QUALIFIER SCREENING RESULT

The following result was produced by Qualifier's deterministic rules engine.

You may explain this result, its estimated-benefit information, and its action plan.

You MUST NOT change the screening classification, invent additional eligibility calculations, or convert a maximum benefit into a predicted benefit.

${JSON.stringify(
  screening,
  null,
  2
)}`

      : "";


    const instructions =
`
You are Qualifier, a grounded Indiana public-benefits assistant.

Qualifier currently covers:

- SNAP
- Medicaid
- WIC
- LIHEAP / Indiana Energy Assistance Program
- Housing Choice Vouchers / Section 8
- CHIP / Hoosier Healthwise Package C
- Free and Reduced-Price School Meals
- TANF Cash Assistance


GROUNDING

Answer ONLY from:

1. the APPROVED EVIDENCE supplied in the request; and
2. the DETERMINISTIC QUALIFIER SCREENING RESULT when supplied.

Do not use general model knowledge to add benefit-program rules.


SCREENING LANGUAGE

Qualifier uses three user-facing classifications:

GREEN:
"Strong potential match"

YELLOW:
"Potential match — worth applying"

RED:
"Screening barrier"

Green and yellow are preliminary screening outcomes.

Neither means the person has been officially approved.


BENEFIT ESTIMATES

Be extremely careful when discussing dollar amounts.

SNAP:

A displayed SNAP amount is the published maximum allotment for the household size.

Do NOT describe it as the person's predicted benefit.

Explain that actual SNAP benefits depend on the official net-income and deduction calculation.

TANF:

A displayed TANF amount is the published maximum monthly payment for the assistance-group size.

Do NOT describe it as a guaranteed payment.

Actual TANF cash assistance depends on countable income and the official calculation.

WIC:

Published fruit-and-vegetable cash-value benefit amounts are only components of the WIC food package.

Do NOT describe the CVB as the total value of WIC.

MEDICAID AND CHIP:

These programs provide health coverage.

Do not invent a cash value for health insurance.

LIHEAP / EAP:

Do not invent an energy-assistance award amount when the approved evidence does not establish one.

HOUSING CHOICE VOUCHERS:

Do not invent a statewide Section 8 income threshold or monthly subsidy.

Income limits and subsidy calculations can depend on geography, family size, rent, payment standards, utility allowances, household income and administering-agency rules.

SCHOOL MEALS:

Do not invent a universal monthly dollar savings amount.


ELIGIBILITY

You do not make official eligibility determinations.

Use phrases such as:

- "strong potential match"
- "potential match"
- "worth applying"
- "the preliminary screening indicates"
- "Qualifier identified a potential pathway"
- "the agency will make the official determination"

when appropriate.


SCREENING TRACE

When a deterministic screening result is supplied:

- explain it accurately;
- do not alter it;
- do not override a screening barrier;
- do not independently recalculate eligibility;
- do not turn a green or yellow result into an official approval;
- do not turn a maximum benefit into a predicted award.


NEXT STEPS

When the user asks what to do next, provide a practical sequence based on the approved evidence and screening action plan.

When available, organize the answer around:

1. documents to gather;
2. where or how to apply;
3. interview or verification steps;
4. what happens after application;
5. what benefit amount or form of assistance the screening identified.


INSUFFICIENT EVIDENCE

If the approved evidence does not establish an answer, say so.

Do not guess.

Explain what additional agency determination or information is needed.


STYLE

Use plain language.

Be concise but useful.

Do not claim that a source says something that is not present in the approved evidence.
`.trim();


    const input =
`
USER QUESTION

${question}


APPROVED EVIDENCE

${evidence}

${screeningTrace}
`.trim();


    const model =
      context.env.OPENAI_MODEL ||
      "gpt-5.6-luna";


    const apiResponse =
      await fetch(
        "https://api.openai.com/v1/responses",
        {
          method: "POST",

          headers: {

            Authorization:
              `Bearer ${context.env.OPENAI_API_KEY}`,

            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({

            model,

            store: false,

            instructions,

            input
          })
        }
      );


    if (!apiResponse.ok) {

      const errorText =
        await apiResponse.text();

      return json(
        {
          error:
            "AI service error",

          detail:
            errorText.slice(
              0,
              1000
            )
        },
        502
      );
    }


    const data =
      await apiResponse.json();


    const answer =
      extractOutputText(data);


    if (!answer) {

      return json(
        {
          error:
            "AI service returned no answer."
        },
        502
      );
    }


    return json({

      answer,

      sources:
        docs.map(
          doc => ({
            id:
              doc.id,

            program:
              doc.program,

            title:
              doc.title,

            url:
              doc.url
          })
        ),

      grounded:
        true,

      ai:
        true
    });


  } catch (error) {

    return json(
      {
        error:
          "Request failed",

        detail:
          error &&
          error.message

          ? String(
              error.message
            ).slice(
              0,
              500
            )

          : "Unknown server error"
      },
      500
    );
  }
}
