export const examples: { name: string; yaml: string }[] = [
  {
    name: "Bug RCA: Payment Timeout",
    yaml: `meta:
  title: "Payment Timeout RCA"
  description: |
    Root cause analysis of intermittent payment
    timeouts during peak hours.
  start: [incident]

nodes:
  incident:
    title: "Payment Timeout in Checkout"
    short_title: "Incident"
    emoji: "\uD83D\uDEA8"
    content: |
      Users reported **intermittent payment timeouts**
      during peak hours on the checkout page.

      - Error rate spiked to **12%** between 2\u20134pm
      - Affected \`/checkout/pay\` endpoint only
      - No deployment or config changes in the prior 24h
    parents: []

  api_gateway:
    title: "API Gateway Logs"
    short_title: "Gateway"
    emoji: "\uD83D\uDD0D"
    content: |
      Gateway logs showed \`504\` errors on \`/api/payment\`.

      | Metric | Normal | During incident |
      |--------|--------|-----------------|
      | Avg response | 200ms | 8s |
      | Connection pool | 40% | 95% |

      > Upstream service was not responding within the 10s gateway timeout.
    parents: [incident]

  db_analysis:
    title: "Database Analysis"
    short_title: "DB Analysis"
    emoji: "\uD83D\uDDC3\uFE0F"
    content: |
      Slow query log revealed a **full table scan** on
      the \`transactions\` table.

      Missing index on:
      \`\`\`sql
      (user_id, created_at)
      \`\`\`

      Query times jumped from *2ms* to *4.5s* under load.
    parents: [api_gateway]

  lock_contention:
    title: "Row Lock Contention"
    short_title: "Lock Issue"
    emoji: "\uD83D\uDD12"
    content: |
      Multiple concurrent transactions competing
      for locks on the same user rows.

      **Root mechanism:**
      1. Payment request times out
      2. Client retry logic fires immediately
      3. New request hits the *same locked row*
      4. Cycle repeats, amplifying contention
    parents: [api_gateway]

  root_cause:
    title: "Root Cause"
    short_title: "Root Cause"
    emoji: "\uD83C\uDFAF"
    content: |
      Missing composite index **combined with**
      aggressive retry logic caused cascading
      lock contention under load.

      > Each retry amplified the problem rather
      > than relieving it.
    parents: [db_analysis, lock_contention]

  fix:
    title: "Fix Applied"
    short_title: "Fix"
    emoji: "\u2705"
    content: |
      ### Changes deployed

      1. Added composite index \`(user_id, created_at)\`
      2. Implemented **idempotency keys** for payments
      3. Added *exponential backoff* to retry logic
      4. Set connection pool timeout to \`2s\`

      ---

      Error rate returned to **<0.1%** within minutes of deploy.
    parents: [root_cause]
`,
  },
  {
    name: "The Lightbulb",
    yaml: `meta:
  title: "The Invention of the Lightbulb"
  description: |
    Key milestones in the development of
    electric lighting.
  start: [arc_lamp]

nodes:
  arc_lamp:
    title: "Arc Lamp (1802)"
    short_title: "Arc Lamp"
    emoji: "\u26A1"
    content: |
      **Humphry Davy** demonstrated the first electric
      light by connecting a battery to charcoal
      electrodes, producing a brilliant *arc of light*.

      - Extremely bright but impractical for homes
      - Required massive batteries
      - Proved electricity could produce light
    parents: []

  vacuum_pump:
    title: "Better Vacuum Pumps (1865)"
    short_title: "Vacuum Pump"
    emoji: "\uD83C\uDF2C\uFE0F"
    content: |
      **Hermann Sprengel** invented the mercury
      displacement pump, enabling the creation of
      much better vacuums.

      > Without a good vacuum, filaments burn out
      > in seconds \u2014 oxygen is the enemy of
      > incandescent light.
    parents: []

  swan:
    title: "Swan's Carbon Filament (1878)"
    short_title: "Swan"
    emoji: "\uD83E\uDEBB"
    content: |
      **Joseph Swan** demonstrated a working lamp using
      *carbonised paper* filament in a vacuum bulb.

      - First practical demonstration in Newcastle
      - Burned out within **hours**
      - Proved the concept was viable
    parents: [arc_lamp, vacuum_pump]

  edison:
    title: "Edison's Bamboo Filament (1879)"
    short_title: "Edison"
    emoji: "\uD83C\uDF8D"
    content: |
      **Edison** tested thousands of materials and found
      *carbonised bamboo* could last over **1,200 hours**.

      He also developed the complete electrical
      distribution system:
      1. Parallel circuit wiring
      2. Durable dynamos
      3. Underground conductors
      4. The screw-base socket (still used today)
    parents: [arc_lamp, vacuum_pump]

  tungsten:
    title: "Tungsten Filament (1904)"
    short_title: "Tungsten"
    emoji: "\uD83D\uDD25"
    content: |
      **Sandor Just** and **Franjo Hanaman** patented the
      tungsten filament bulb.

      Tungsten's high melting point (\`3,422\u00B0C\`) made
      bulbs far more *efficient* and *longer-lasting*
      than carbon filaments.
    parents: [swan, edison]

  modern:
    title: "The Modern Bulb"
    short_title: "Modern"
    emoji: "\uD83D\uDCA1"
    content: |
      Coiled tungsten filaments in **argon gas** became
      the standard for over a century.

      The incandescent bulb eventually gave way to:
      - **CFL** \u2014 compact fluorescent
      - **LED** \u2014 light-emitting diodes

      > The humble lightbulb changed civilisation,
      > extending productive hours beyond sunset.
    parents: [tungsten]
`,
  },
  {
    name: "Napoleon's March (1812)",
    yaml: `meta:
  title: "Napoleon's Russian Campaign"
  description: |
    The disastrous 1812 invasion of Russia
    that shattered the Grande Arm\u00E9e.
  start: [assembly]

nodes:
  assembly:
    title: "Grande Arm\u00E9e Assembles"
    short_title: "Assembly"
    emoji: "\u2694\uFE0F"
    content: |
      Napoleon gathered roughly **685,000 troops** \u2014 the
      largest European army ever assembled \u2014 along the
      banks of the *Neman River* in June 1812.

      Forces drawn from across the Empire:
      - France, Italy, Poland
      - German states, Austria
      - Many reluctant conscripts
    parents: []

  crossing:
    title: "Crossing the Neman"
    short_title: "Neman"
    emoji: "\uD83C\uDF0A"
    content: |
      On **June 24**, the army crossed into Russian
      territory. Problems began immediately:

      1. Supply lines stretched dangerously thin
      2. Extreme heat and poor roads
      3. Early losses to *disease* and *desertion*

      > The campaign was barely a week old and
      > already haemorrhaging men.
    parents: [assembly]

  smolensk:
    title: "Battle of Smolensk"
    short_title: "Smolensk"
    emoji: "\uD83D\uDD25"
    content: |
      The Russians retreated and **burned Smolensk**
      rather than let it be captured. Napoleon found
      only ruins.

      The *scorched-earth strategy* denied the Grande
      Arm\u00E9e any local supplies or shelter.
    parents: [crossing]

  borodino:
    title: "Battle of Borodino"
    short_title: "Borodino"
    emoji: "\uD83D\uDCA5"
    content: |
      The **bloodiest single day** of the Napoleonic Wars.

      | Side | Casualties |
      |------|-----------|
      | French | ~30,000 |
      | Russian | ~40,000 |

      A pyrrhic victory for Napoleon \u2014 the Russian
      army withdrew *intact*.
    parents: [smolensk]

  moscow:
    title: "Moscow Burns"
    short_title: "Moscow"
    emoji: "\uD83C\uDFDB\uFE0F"
    content: |
      Napoleon entered Moscow on **September 14**
      expecting surrender. Instead, the city was
      *set ablaze* \u2014 likely by Russian saboteurs.

      He waited **five weeks** for a peace that
      never came.
    parents: [borodino]

  retreat:
    title: "The Great Retreat"
    short_title: "Retreat"
    emoji: "\u2744\uFE0F"
    content: |
      With winter approaching and no supplies,
      Napoleon ordered retreat on **October 19**.

      Conditions on the march:
      - Temperatures dropped to **\u221230\u00B0C**
      - Starvation was rampant
      - *Cossack raids* picked off stragglers daily

      > Men froze where they stood.
    parents: [moscow]

  berezina:
    title: "Crossing the Berezina"
    short_title: "Berezina"
    emoji: "\uD83C\uDF09"
    content: |
      The army's remnants fought desperately to
      cross the *Berezina River* in November.

      **Engineers built bridges in freezing water**,
      many dying in the process. Thousands of
      soldiers drowned or were trampled in the chaos.
    parents: [retreat]

  remnant:
    title: "27,000 Return"
    short_title: "Return"
    emoji: "\uD83D\uDC94"
    content: |
      Of the **685,000** who set out, fewer than
      **27,000** combat-effective soldiers returned.

      The campaign:
      - Shattered Napoleon's *aura of invincibility*
      - Emboldened the coalition against France
      - Set the stage for his **abdication in 1814**

      ---

      *"An army marches on its stomach."*
      \u2014 attributed to Napoleon
    parents: [berezina]
`,
  },
];
