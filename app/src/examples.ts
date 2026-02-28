export const examples: { name: string; yaml: string }[] = [
  {
    name: "Software: The 500-Mile Email",
    yaml: `meta:
  title: "The Case of the 500-Mile Email"
  description: |
    Based on the legendary real-world case reported by Trey Harris. 
    This investigation tracks a seemingly "impossible" bug where a 
    university's email system worked perfectly for local recipients 
    but failed for anyone further than 500 miles away. It serves as 
    a masterclass in non-linear troubleshooting, moving from 
    skepticism and dead-end configuration checks to a startling 
    realization about the intersection of software timeouts and 
    the physical speed of light.
  start: [incident]

nodes:
  incident:
    title: "The Geography Bug"
    short_title: "The Report"
    emoji: "📧"
    content: |
      A department head at a university campus calls the help desk 
      with a bizarre complaint: "We can't send email further than 
      500 miles."

      The administrator initially assumes the user is confused, but 
      the data is consistent. Emails to nearby cities like 
      Richmond (~400 miles) arrive instantly, while any attempt 
      to send to Memphis (~600 miles) or further results in a 
      permanent "Connection Timed Out" error. 

      The issue appeared suddenly after a scheduled system 
      maintenance window on the central mail server.
    parents: []

  skepticism:
    title: "Initial Skepticism"
    short_title: "Skepticism"
    emoji: "🤨"
    content: |
      The system administrator, Trey Harris, starts with the 
      logical assumption that geography cannot affect software. 
      "Email doesn't have a mileage counter," he thinks.

      He suspects a faulty DNS entry or a specific routing table 
      issue at the university's ISP. He begins running manual 
      probes to the failing addresses, expecting to find a 
      misconfigured gateway or a broken router somewhere in 
      the regional network backbone.
    parents: [incident]

  ping_dead_end:
    title: "Dead End: Network Layer"
    short_title: "Ping OK"
    emoji: "⛔"
    content: |
      Network diagnostics show no obvious failures. 
      'Ping' and 'Traceroute' to the "too far" servers 
      return perfectly healthy responses.

      - Round-trip time (RTT) to Memphis: **30ms**
      - Packet loss: **0%**

      This is a major dead end. If the network layer (OSI Layer 3) 
      is fine, why is the application layer (SMTP) timing out? 
      The packets are clearly making it to the destination, 
      but the email handshake is failing.
    parents: [skepticism]

  sendmail_check:
    title: "Divergence: Sendmail Config"
    short_title: "Sendmail"
    emoji: "⚙️"
    content: |
      Trey shifts focus to the server software. The university 
      had recently upgraded to a newer version of SunOS, which 
      included a new version of the **Sendmail** daemon.

      He dives into the notoriously complex \`sendmail.cf\` 
      configuration file. He suspects that the upgrade might 
      have reverted some custom tuning parameters, perhaps 
      imposing a strange security restriction on external 
      IP ranges that accidentally correlated with distance.
    parents: [incident]

  timeout_discovery:
    title: "The 5ms Timeout"
    short_title: "Timeout"
    emoji: "⌛"
    content: |
      Upon deep inspection of the new config file, Trey finds 
      a single line that looks suspicious:
      \`\`\`
      O ConnectTimeout=0
      \`\`\`

      In this specific version of Sendmail, a value of "0" didn't 
      mean "infinite wait"—it meant "use the system's minimal 
      unit." On this SunOS build, that unit was **5 milliseconds**.

      The server was giving every remote mail server exactly 
      5ms to respond to the initial "Hello" packet before 
      giving up and dropping the connection.
    parents: [sendmail_check]

  convergence:
    title: "The Speed of Light"
    short_title: "Physics"
    emoji: "🎯"
    content: |
      ### The Synthesis of Physics and Code
      Everything clicks into place. Light (and electrical signals 
      in fiber) travels at roughly 1 foot per nanosecond. 
      In fiber optics, the effective speed is about 2/3 of 
      the speed of light in a vacuum.

      - **500 miles** = 2,640,000 feet.
      - **Round trip** = 5,280,000 feet.
      - At ~1ms per 200km, a 500-mile round trip takes 
        almost exactly **5 milliseconds**.

      If a server was 501 miles away, the "I'm here!" signal 
      literally could not travel back through the glass fiber 
      fast enough to beat the 5ms software timeout. Physics 
      was the "mileage counter."
    parents: [ping_dead_end, timeout_discovery]

  resolution:
    title: "Resolution"
    short_title: "Fix"
    emoji: "✅"
    content: |
      Trey changed the timeout value from \`0\` to the 
      standard \`5m\` (5 minutes). 

      The "Geography Bug" vanished immediately. This case 
      became a legend in the Unix community, illustrating 
      that when the "impossible" happens, you have to look 
      at the constants of the universe.
    parents: [convergence]
`,
  },
  {
    name: "Science: Cholera (1854)",
    yaml: `meta:
  title: "The Broad Street Pump"
  description: |
    The 1854 Soho Cholera outbreak was a turning point in medical 
    history. At a time when the "Miasma Theory" of bad air dominated 
    science, Dr. John Snow used data visualization and shoe-leather 
    epidemiology to prove that the disease was water-borne. This 
    example illustrates a classic conflict between an established 
    but wrong scientific dogma and a new, evidence-based hypothesis 
    that initially seemed absurd to the authorities.
  start: [outbreak]

nodes:
  outbreak:
    title: "The Soho Outbreak"
    short_title: "Outbreak"
    emoji: "☣️"
    content: |
      In late August 1854, a terrifying outbreak of Cholera 
      hits the Soho district of London. In a single week, 
      over **10% of the population** in a small radius dies.

      The symptoms are violent and rapid—perfectly healthy 
      people collapse and die within 12 to 48 hours. The 
      local community is paralyzed by fear as families 
      are wiped out in their sleep.
    parents: []

  miasma_theory:
    title: "Miasma Theory"
    short_title: "Miasma"
    emoji: "💨"
    content: |
      The scientific establishment, led by William Farr, 
      believes in **Miasma**. They argue that Cholera is 
      caused by "bad air" or "effluvia" rising from 
      rotting organic matter and sewage.

      Soho is crowded and smells terrible, which seems 
      to support the theory. Officials tell citizens to 
      burn incense and open windows to "let the miasma out."
    parents: [outbreak]

  sewer_dead_end:
    title: "Dead End: Sewer Cleaning"
    short_title: "Sewer Error"
    emoji: "⛔"
    content: |
      In an attempt to "clean the air," the Board of 
      Health orders the local sewers to be flushed 
      directly into the River Thames.

      **The Catastrophe:** This "cleansing" actually 
      pushed concentrated cholera bacteria directly into 
      the river from which many water companies drew 
      their supply. Instead of stopping the miasma, 
      they poisoned the city's drinking water even further.
    parents: [miasma_theory]

  snow_hypothesis:
    title: "Snow's Hypothesis"
    short_title: "Water-borne"
    emoji: "📓"
    content: |
      Dr. John Snow, a local physician, has long 
      doubted Miasma. He notes that Cholera affects the 
      gut, not the lungs—suggesting it must be 
      ingested rather than inhaled.

      He begins a door-to-door investigation of the 
      victims' families, asking one simple question: 
      "Where did you get your water?"
    parents: [outbreak]

  ghost_map:
    title: "The Ghost Map"
    short_title: "Mapping"
    emoji: "🗺️"
    content: |
      Snow creates a revolutionary map. He marks each 
      death as a black bar at the address where the 
      victim lived. 

      The visual data is shocking: a massive cluster of 
      bars surrounds the **Broad Street water pump**. 
      The further you move from that specific pump, 
      the fewer deaths you find.
    parents: [snow_hypothesis]

  anomaly_divergence:
    title: "Divergent Anomalies"
    short_title: "Anomalies"
    emoji: "❓"
    content: |
      Two strange "anomalies" initially seem to 
      contradict Snow's map:
      
      1. **The Brewery:** A brewery right next to 
         the pump had **zero** deaths among its 70 workers.
      2. **The Hampstead Widow:** A woman living miles 
         away in a "clean" neighborhood died of Cholera.
    parents: [ghost_map]

  anomaly_explained:
    title: "Anomalies Explained"
    short_title: "Solved"
    emoji: "✅"
    content: |
      Snow investigates further and finds the "exceptions" 
      are his strongest proof:

      - **The Brewery:** The workers were allowed 
        free beer, so they rarely drank water. The 
        beer-making process involved boiling the 
        water, which killed the bacteria.
      - **The Widow:** She used to live in Soho and 
        liked the "sweet" taste of the Broad Street 
        well. She had a bottle of it delivered to 
        her home in Hampstead every day.
    parents: [anomaly_divergence]

  convergence:
    title: "Action & Proof"
    short_title: "Convergence"
    emoji: "💧"
    content: |
      Snow presents his map and the anomaly data to 
      the St. James Parish Board. While they are 
      still skeptical of his "germs," the evidence 
      of the pump's involvement is undeniable.

      They agree to a simple experiment: **Remove 
      the pump handle.** Within days, the local 
      outbreak grinds to a halt.
    parents: [anomaly_explained, sewer_dead_end]

  legacy:
    title: "Birth of Epidemiology"
    short_title: "Legacy"
    emoji: "🌱"
    content: |
      Snow's work founded the field of modern 
      epidemiology. It proved that mapping and 
      data-tracking could solve medical mysteries.

      Decades later, Robert Koch would identify 
      *Vibrio cholerae* under a microscope, finally 
      providing the biological proof for what 
      John Snow saw on his map in 1854.
    parents: [convergence]
`,
  },
  {
    name: "History: The First Flight",
    yaml: `meta:
  title: "The Quest for the Sky"
  description: |
    The invention of the airplane was not just about adding an engine 
    to a glider. It required a fundamental shift in how inventors 
    viewed "control." This graph follows the non-linear path from 
    failed attempts at mimicking bird flight to the Wright Brothers' 
    revolutionary realization that a plane should be unstable but 
    controllable—just like a bicycle.
  start: [ornithopter]

nodes:
  ornithopter:
    title: "Mimicking Birds"
    short_title: "Ornithopter"
    emoji: "🦢"
    content: |
      For centuries, humans looked at birds and 
      assumed the secret to flight was **flapping**.

      Early inventors built "Ornithopters"—machines 
      with mechanical wings powered by human muscle 
      or early steam engines. They believed that if 
      they could just flap fast enough, they would 
      achieve lift.
    parents: []

  dead_end_flapping:
    title: "Dead End: Flapping"
    short_title: "Failure"
    emoji: "⛔"
    content: |
      Ornithopters failed for two reasons:
      1. **Biomechanics:** Human muscles are too 
         weak to lift our body weight via flapping.
      2. **Structural Stress:** The mechanical 
         stresses of rapidly flapping large wings 
         caused every prototype to shake itself apart.

      By the late 1800s, serious inventors realized 
      flapping was a dead end for human-scale flight.
    parents: [ornithopter]

  divergence_gliding:
    title: "Divergence: Gliding"
    short_title: "Gliders"
    emoji: "🪂"
    content: |
      Otto Lilienthal, the "Glider King," realizes 
      we should separate **lift** from **propulsion**.

      He builds fixed-wing gliders and makes 
      thousands of flights from a man-made hill. 
      He proves that curved (cambered) wings 
      produce the most lift. However, he lacks 
      a way to turn or control the glider's roll.
    parents: [ornithopter]

  power_problem:
    title: "The Power Problem"
    short_title: "Engines"
    emoji: "⚙️"
    content: |
      While some sought flight through gliders, the 
      industrial revolution was independently solving 
      the problem of **propulsion**. 
      
      However, in 1900, engines were still monsters 
      of cast iron designed for factories and 
      heavy automobiles. 

      - Steam engines: High power but far too heavy 
        due to boilers and water.
      - Early gas engines: Promising, but heavy and 
        notoriously unreliable.
    parents: []

  control_problem:
    title: "The Control Problem"
    short_title: "Control"
    emoji: "🕹️"
    content: |
      Most inventors (like Samuel Langley) tried 
      to build "inherently stable" planes—ships 
      of the air that would stay level on their own.

      The Wright Brothers, being bicycle mechanics, 
      had a different insight: A bicycle is 
      **unstable**, but the rider controls it 
      through constant tiny adjustments. They 
      decided a plane should be the same.
    parents: [divergence_gliding]

  wing_warping:
    title: "Wing Warping"
    short_title: "Warping"
    emoji: "✈️"
    content: |
      Wilbur Wright observes buzzards twisting 
      their wingtips to bank into turns. He 
      realizes they need a way to change the 
      shape of the wing mid-flight.

      They develop **"Wing Warping"**—a system 
      of pulleys that twists the fabric wings 
      to provide 3-axis control (pitch, roll, 
      and yaw). This is the "Aha!" moment 
      of aeronautical engineering.
    parents: [control_problem]

  custom_engine:
    title: "The Aluminum Engine"
    short_title: "Custom Engine"
    emoji: "🔥"
    content: |
      Unable to buy a lightweight engine, the 
      Wrights and their mechanic Charlie Taylor 
      build their own in their bike shop.

      They use a revolutionary **aluminum block** 
      to keep the weight down to 180 lbs while 
      still producing 12 horsepower.
    parents: [power_problem]

  convergence:
    title: "Kitty Hawk (1903)"
    short_title: "Success"
    emoji: "🏁"
    content: |
      On December 17, 1903, the pieces converge:
      - The **Lift** from their wind-tunnel data.
      - The **Power** from the aluminum engine.
      - The **Control** from wing-warping and 
        the rear rudder.

      Orville Wright makes the first flight: 
      12 seconds, 120 feet. By the fourth 
      flight that day, Wilbur flies for 
      59 seconds. The age of aviation is born.
    parents: [wing_warping, custom_engine]
`,
  },
];
