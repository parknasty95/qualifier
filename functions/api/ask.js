const SOURCES = [
  {
    id: "snap",
    program: "SNAP",
    title: "Indiana FSSA — SNAP Food Assistance / DFR Policy Manual",
    url: "https://www.in.gov/fssa/dfr/snap-food-assistance/",
    keys: [
      "snap",
      "food stamp",
      "food stamps",
      "resource",
      "resources",
      "student",
      "work rule",
      "household",
      "deduction",
      "deductions",
      "food assistance"
    ],
    text:
      "Indiana SNAP eligibility is administered by FSSA/DFR. Eligibility can involve household composition, gross and net income, deductions, resources, student rules, work rules, citizenship and noncitizen rules, and verification. The Indiana DFR Program Policy Manual contains detailed state policy used by this prototype. FSSA makes the official eligibility determination."
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
      "impact",
      "caretaker",
      "relative",
      "child support",
      "asset",
      "assets"
    ],
    text:
      "Indiana TANF cash assistance serves qualifying families with children under age 18 living with a parent or qualifying relative. Indiana publishes income standards and applies additional nonfinancial requirements. Other requirements can include state residency, Social Security numbers, citizenship or immigration rules, employment or IMPACT requirements, child support requirements, and resource rules. FSSA makes the official eligibility determination."
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
      "income",
      "resource",
      "citizenship",
      "immigration",
      "impact",
      "assistance group",
      "eligibility manual"
    ],
    text:
      "The Indiana DFR Program Policy Manual contains detailed eligibility policy for programs administered by the Division of Family Resources, including SNAP and TANF. It addresses administrative policy, nonfinancial eligibility, IMPACT processing, resources, income, eligibility standards, assistance groups, budgeting, appeals, and related rules. The manual is revised over time, so current policy and effective dates should be checked."
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
      "disability",
      "aged",
      "blind",
      "health insurance",
      "health coverage",
      "medical coverage"
    ],
    text:
      "Indiana Medicaid uses different eligibility categories. Indiana publishes an Eligibility Guide with income standards for categories that include pregnant individuals, children, adults, and aged, blind, or disabled applicants. Adults may qualify through the Healthy Indiana Plan, while children and pregnant individuals can qualify through Hoosier Healthwise. Aged, blind, disabled, institutional, and waiver pathways can involve additional income, resource, and program-specific rules. The guide is a screening resource and an application is required for an official determination."
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
      "medicaid resources",
      "medicaid income",
      "waiver",
      "institutional",
      "nursing home"
    ],
    text:
      "The Indiana Health Coverage Program Eligibility Policy Manual contains detailed eligibility and administrative policy for Indiana Medicaid programs. It addresses nonfinancial eligibility, income, resources, assistance groups, budgeting, institutional eligibility, waiver programs, Healthy Indiana Plan eligibility, appeals, and other Medicaid eligibility topics. The manual is revised over time."
  },

  {
    id: "chip",
    program: "CHIP",
    title: "Indiana Medicaid — Hoosier Healthwise / CHIP Package C",
    url: "https://www.in.gov/medicaid/members/member-programs/hoosier-healthwise/",
    keys: [
      "chip",
      "children's health insurance program",
      "childrens health insurance program",
      "package c",
      "hoosier healthwise",
      "child health",
      "children health",
      "child insurance"
    ],
    text:
      "Indiana administers the Children's Health Insurance Program through Hoosier Healthwise Package C. Package C provides health coverage for qualifying children under age 19 whose family income is above the applicable Medicaid Package A level but within the Package C eligibility standard. Package C can involve premiums and copayments. Indiana Medicaid and FSSA make official eligibility determinations."
  },

  {
    id: "wic",
    program: "WIC",
    title: "Indiana Department of Health — WIC Eligibility Requirements",
    url: "https://www.in.gov/health/wic/eligibility-requirements/",
    keys: [
      "wic",
      "women infants children",
      "women infants and children",
      "pregnant",
      "pregnancy",
      "breastfeeding",
      "postpartum",
      "infant",
      "infants",
      "nutrition",
      "nutritional risk"
    ],
    text:
      "Indiana WIC eligibility includes Indiana residency, categorical eligibility, income eligibility, and nutritional risk. Eligible categories can include pregnant people, breastfeeding people, postpartum people within the applicable period, infants, and children under age five. Nutritional risk is determined through the WIC certification process by an appropriate health professional. Indiana states that families receiving Medicaid, SNAP, or TANF are income-eligible for WIC. Indiana also publishes WIC income guidelines."
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
      "electricity",
      "gas bill",
      "heating",
      "heat",
      "disconnect",
      "disconnection",
      "litt"
    ],
    text:
      "Indiana administers the federal Low Income Home Energy Assistance Program through the Indiana Energy Assistance Program, commonly called EAP. Eligibility is based on program requirements that include household income. Indiana publishes program-year income guidelines and application instructions. Applicants can be required to provide proof of household income, utility information, and other verification. Applications are processed through Indiana's designated system and Local Service Providers. The administering agency or Local Service Provider makes the official eligibility determination."
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
      "waiting list",
      "housing authority",
      "pha"
    ],
    text:
      "The Housing Choice Voucher program provides rental assistance to qualifying households. Eligibility involves household and income requirements, but income limits vary by geographic area and household size under HUD rules. Housing Choice Voucher programs are administered by public housing agencies and, in applicable areas, the Indiana Housing and Community Development Authority. Applicants can be placed on waiting lists. Meeting basic eligibility requirements does not guarantee that a voucher is immediately available."
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
      "very low income",
      "extremely low income"
    ],
    text:
      "The IHCDA Housing Choice Voucher Administrative Plan contains detailed policies governing the Housing Choice Voucher program in areas administered by IHCDA. Housing Choice Voucher income limits depend on HUD income limits for the applicable geographic area and family size. The program also applies nonfinancial requirements and waiting-list policies. A single statewide income threshold should not be used to determine Housing Choice Voucher eligibility."
  },

  {
    id: "hud",
    program: "Housing Choice Voucher",
    title: "HUD — Housing Choice Voucher Program",
    url: "https://www.hud.gov/housing-counseling/rental/housing-choice-voucher-program",
    keys: [
      "hud",
      "public housing agency",
      "public housing authority",
      "pha",
      "section 8",
      "voucher",
      "income limit",
      "housing waiting list"
    ],
    text:
      "HUD's Housing Choice Voucher program is administered locally by public housing agencies. Eligibility depends on factors including annual gross income and family size, using HUD income limits for the relevant area. Other eligibility requirements also apply. Because demand for housing assistance can exceed available resources, applicants may be placed on waiting lists."
  },

  {
    id: "schoolmeals",
    program: "Free / Reduced-Price School Meals",
    title: "Indiana Department of Education — Income Eligibility Guidelines",
    url: "https://www.in.gov/doe/nutrition/free-and-reduced-information/",
    keys: [
      "school lunch",
      "school lunches",
      "school meal",
      "school meals",
      "free lunch",
      "free meal",
      "reduced price",
      "reduced-price",
      "school breakfast",
      "breakfast program"
    ],
    text:
      "Indiana uses federal income eligibility guidelines for free and reduced-price school meals. Income limits vary by household size and are updated by school year. Students may also qualify through categorical or direct-certification pathways. The child's school or school food authority administers the meal benefit and makes the applicable determination."
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
      "school meals",
      "snap school",
      "tanf school",
      "medicaid school",
      "foster child",
      "foster school"
    ],
    text:
      "Indiana uses direct certification to identify students who can receive school meal benefits without submitting a traditional household meal application. Direct certification can use qualifying program information such as SNAP, TANF, Medicaid, foster-care, and other eligible data matches, subject to applicable program rules."
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
      "interview"
    ],
    text:
      "Indiana residents can use the FSSA Benefits Portal for supported programs administered by FSSA. Applications can require verification of household circumstances, income, identity, residency, resources, expenses, or other program-specific facts. The administering agency makes the official eligibility determination."
  }
];

function normalize(value) {
  return String(value || "").toLowerCase();
}

function retrieve(question) {
  const q = normalize(question);

  return SOURCES
    .map((source) => {
      let score = 0;

      for (const key of source.keys) {
        if (q.includes(key.toLowerCase())) {
          score += key.length;
        }
      }

      if (q.includes(normalize(source.program))) {
        score += 15;
      }

      return {
        source,
        score
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
    .map((item) => item.source);
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function extractOutputText(data) {
  if (data && typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  let answer = "";

  if (data && Array.isArray(data.output)) {
    for (const item of data.output) {
      if (!item || !Array.isArray(item.content)) {
        continue;
      }

      for (const content of item.content) {
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

export async function onRequestPost(context) {
  try {
    const body = await context.request.json();

    const question = String(body.question || "")
      .trim()
      .slice(0, 3000);

    if (!question) {
      return json(
        {
          error: "Question required"
        },
        400
      );
    }

    const screening = body.screening || null;
    const docs = retrieve(question);

    const resultQuestion =
      /why|my result|my results|my screening|screening result|screening results|qualify|qualified|qualification|match|matches|eligible|eligibility/i.test(
        question
      );

    /*
     * A question about the user's screening result may still be answered
     * from the deterministic screening trace even when no separate source
     * was retrieved by keyword.
     */
    if (docs.length === 0 && !(screening && resultQuestion)) {
      return json({
        answer:
          "I cannot answer that reliably from the approved Indiana benefits material currently loaded into Qualifier. I will not guess. Please consult the relevant administering agency or add the applicable verified policy passage to Qualifier's approved knowledge base.",
        sources: [],
        grounded: false,
        ai: false
      });
    }

    /*
     * The API key must be stored in Cloudflare as the encrypted secret:
     *
     * OPENAI_API_KEY
     */
    if (!context.env.OPENAI_API_KEY) {
      return json(
        {
          error: "Live AI service is not configured.",
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
              (doc, index) =>
                `SOURCE ${index + 1}
PROGRAM: ${doc.program}
TITLE: ${doc.title}
APPROVED PASSAGE:
${doc.text}
SOURCE URL: ${doc.url}`
            )
            .join("\n\n")
        : "No separate source passage was retrieved for this question.";

    const screeningTrace =
      screening && resultQuestion
        ? `

DETERMINISTIC SCREENING TRACE

The following result was generated by Qualifier's deterministic rules engine.

You may explain this trace, but you MUST NOT change, override, expand, or independently recalculate it.

${JSON.stringify(screening, null, 2)}`
        : "";

    const instructions = `
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

GROUNDING REQUIREMENTS

Answer ONLY from:

1. the APPROVED EVIDENCE supplied in the request; and
2. the DETERMINISTIC SCREENING TRACE when one is supplied.

Do not use your general model knowledge to add benefit-program rules.

Do not invent or infer:

- income limits
- resource limits
- eligibility thresholds
- deductions
- categorical requirements
- immigration requirements
- disability rules
- work requirements
- waiting-list availability
- application periods
- effective dates
- premiums
- copayments
- exceptions
- legal classifications
- agency procedures

unless that information appears in the approved evidence supplied to you.

ELIGIBILITY

You do not make official eligibility determinations.

Use language such as:

- "may qualify"
- "may be worth applying for"
- "the preliminary screening indicates"
- "Qualifier identified a potential pathway"
- "additional agency review is required"

when appropriate.

Never say that a person is officially eligible unless the approved evidence explicitly establishes that an agency has already made that determination.

SCREENING TRACE

When a deterministic screening trace is supplied:

- explain the trace accurately;
- do not alter its result;
- do not invent additional calculations;
- do not override a screening barrier;
- do not turn a "needs verification" result into an eligibility determination.

INSUFFICIENT EVIDENCE

If the approved evidence is insufficient to answer the user's question, say so clearly.

Do not guess.

Explain what information or agency review would be needed.

HOUSING CHOICE VOUCHERS

Do not invent a single Indiana statewide Section 8 income threshold.

Housing Choice Voucher income limits can depend on geographic area, household size, administering agency, and current HUD limits.

Voucher availability and waiting-list status are separate from basic eligibility.

MEDICAID

Do not collapse all Indiana Medicaid programs into one income threshold.

Different eligibility groups can have different rules.

WIC

Do not independently determine nutritional risk.

That determination belongs to the WIC certification process.

STYLE

Use plain language.

Be concise but useful.

When possible, explain:

1. what the rule means;
2. how it relates to the user's question;
3. what the user should do next.

Do not claim that a source says something that is not contained in the approved evidence.
`.trim();

    const input = `
USER QUESTION

${question}

APPROVED EVIDENCE

${evidence}
${screeningTrace}
`.trim();

    /*
     * OPENAI_MODEL may optionally be configured in Cloudflare.
     *
     * If it is not configured, this uses the same default model that
     * the working Qualifier prototype used previously.
     */
    const model =
      context.env.OPENAI_MODEL || "gpt-5.6-luna";

    const apiResponse = await fetch(
      "https://api.openai.com/v1/responses",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${context.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json"
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
      const errorText = await apiResponse.text();

      return json(
        {
          error: "AI service error",
          detail: errorText.slice(0, 1000)
        },
        502
      );
    }

    const data = await apiResponse.json();
    const answer = extractOutputText(data);

    if (!answer) {
      return json(
        {
          error: "AI service returned no answer."
        },
        502
      );
    }

    return json({
      answer,
      sources: docs.map((doc) => ({
        id: doc.id,
        program: doc.program,
        title: doc.title,
        url: doc.url
      })),
      grounded: true,
      ai: true
    });
  } catch (error) {
    return json(
      {
        error: "Request failed",
        detail:
          error && error.message
            ? String(error.message).slice(0, 500)
            : "Unknown server error"
      },
      500
    );
  }
}
