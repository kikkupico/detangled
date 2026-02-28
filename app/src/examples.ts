export const examples: { name: string; yaml: string }[] = [
  {
    name: "CS: The LeetCode Skill Tree",
    yaml: `meta:
  title: "The LeetCode Skill Tree (50 Problems)"
  description: |
    A comprehensive roadmap of 50 essential LeetCode problems. 
    This complex graph illustrates how advanced algorithms and data structures 
    are built upon foundational concepts. By following the paths, you can see 
    how mastering Two Sum and Binary Search eventually leads to solving 
    complex problems like Trapping Rain Water and Minimum Window Substring. 
    Difficulty is indicated by 🟢 (Easy), 🟡 (Medium), and 🔴 (Hard).
  start: [contains_duplicate, best_time_to_buy, valid_palindrome, valid_parentheses, binary_search, reverse_linked_list, merge_two_sorted_lists, invert_binary_tree]

nodes:
  contains_duplicate:
    title: "Contains Duplicate"
    short_title: "Contains Duplicate"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/contains-duplicate/)**
      
      The absolute foundation.
      
      **New Concepts:**
      - Array iteration
      - Hash Sets for O(1) lookups
    parents: []

  valid_anagram:
    title: "Valid Anagram"
    short_title: "Valid Anagram"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/valid-anagram/)**
      
      Builds on the O(1) lookup concept by tracking frequencies instead of just existence.
      
      **New Concepts:**
      - Frequency counting
      - Hash Maps
    parents: [contains_duplicate]

  two_sum:
    title: "Two Sum"
    short_title: "Two Sum"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/two-sum/)**
      
      Takes the Hash Map lookup concept and applies it to math and indices.
      
      **New Concepts:**
      - One-pass arithmetic complements
    parents: [contains_duplicate]

  group_anagrams:
    title: "Group Anagrams"
    short_title: "Group Anagrams"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/group-anagrams/)**
      
      Combines frequency counting with complex Hash Map usage where values are lists.
      
      **New Concepts:**
      - String sorting as keys
      - Grouping
    parents: [valid_anagram, two_sum]

  top_k_frequent_elements:
    title: "Top K Frequent Elements"
    short_title: "Top K Frequent Elements"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/top-k-frequent-elements/)**
      
      Extends grouping by requiring sorting by frequency.
      
      **New Concepts:**
      - Bucket Sort
      - Priority Queues (Heaps)
    parents: [group_anagrams]

  best_time_to_buy:
    title: "Best Time to Buy & Sell Stock"
    short_title: "Best Time to Buy & Sell Stock"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)**
      
      Foundation of sliding window and state tracking.
      
      **New Concepts:**
      - Two Pointers (Slow/Fast)
      - Tracking minimums
    parents: []

  longest_consecutive_sequence:
    title: "Longest Consecutive Seq"
    short_title: "Longest Consecutive Seq"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/longest-consecutive-sequence/)**
      
      Applies O(1) lookups to find boundaries of sequences.
      
      **New Concepts:**
      - Intelligent sequence building
      - O(n) limits
    parents: [two_sum]

  valid_palindrome:
    title: "Valid Palindrome"
    short_title: "Valid Palindrome"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/valid-palindrome/)**
      
      Foundation of bidirectional pointer traversal.
      
      **New Concepts:**
      - Two Pointers (Left/Right)
      - String filtering
    parents: []

  two_sum_ii:
    title: "Two Sum II"
    short_title: "Two Sum II"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)**
      
      Replaces the Hash Map of Two Sum with the bidirectional pointers of Valid Palindrome.
      
      **New Concepts:**
      - Exploiting sorted arrays with pointers
    parents: [two_sum, valid_palindrome]

  three_sum:
    title: "3Sum"
    short_title: "3Sum"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/3sum/)**
      
      Applies Two Sum II iteratively while managing complex duplicate state.
      
      **New Concepts:**
      - Reducing 3D problems to 2D
      - Avoiding duplicates
    parents: [two_sum_ii]

  container_with_most_water:
    title: "Container With Most Water"
    short_title: "Container With Most Water"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/container-with-most-water/)**
      
      Applies bidirectional pointers to maximize a geometric area.
      
      **New Concepts:**
      - Greedy pointer movement
      - Area calculation
    parents: [two_sum_ii]

  trapping_rain_water:
    title: "Trapping Rain Water"
    short_title: "Trapping Rain Water"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/trapping-rain-water/)**
      
      The ultimate evolution of the geometric pointer movement, requiring tracking bounds on both sides.
      
      **New Concepts:**
      - Prefix max arrays
      - Advanced two-pointer state
    parents: [container_with_most_water]

  longest_substring_without_repeating:
    title: "Longest Substring No Repeats"
    short_title: "Longest Substring No Repeats"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/longest-substring-without-repeating-characters/)**
      
      Combines frequency counting with two pointers moving in the same direction.
      
      **New Concepts:**
      - Sliding Window
      - Dynamic window resizing
    parents: [valid_anagram, valid_palindrome]

  longest_repeating_character_replacement:
    title: "Longest Repeating Char Replacement"
    short_title: "Longest Repeating Char Replacement"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/longest-repeating-character-replacement/)**
      
      Adds a math constraint (k changes) to the sliding window.
      
      **New Concepts:**
      - Max frequency tracking within a window
    parents: [longest_substring_without_repeating]

  minimum_window_substring:
    title: "Minimum Window Substring"
    short_title: "Minimum Window Substring"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/minimum-window-substring/)**
      
      The pinnacle of sliding window, requiring matching complex frequency states dynamically.
      
      **New Concepts:**
      - Multiple frequency maps
      - 'Have' vs 'Need' tracking
    parents: [longest_repeating_character_replacement, group_anagrams]

  valid_parentheses:
    title: "Valid Parentheses"
    short_title: "Valid Parentheses"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/valid-parentheses/)**
      
      The foundation of state-based parsing.
      
      **New Concepts:**
      - LIFO (Last-In-First-Out)
      - Stacks
    parents: []

  min_stack:
    title: "Min Stack"
    short_title: "Min Stack"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/min-stack/)**
      
      Builds on stack mechanics by tracking minimums at every level.
      
      **New Concepts:**
      - Parallel state tracking
      - Design
    parents: [valid_parentheses]

  evaluate_reverse_polish_notation:
    title: "Evaluate RPN"
    short_title: "Evaluate RPN"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/evaluate-reverse-polish-notation/)**
      
      Applies LIFO mechanics to evaluate expressions.
      
      **New Concepts:**
      - Mathematical parsing with stacks
    parents: [min_stack]

  daily_temperatures:
    title: "Daily Temperatures"
    short_title: "Daily Temperatures"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/daily-temperatures/)**
      
      Evolves the stack into a 'Monotonic Stack' that tracks decreasing values for next-greater elements.
      
      **New Concepts:**
      - Monotonic Decreasing Stack
    parents: [evaluate_reverse_polish_notation]

  largest_rectangle_in_histogram:
    title: "Largest Rectangle in Histogram"
    short_title: "Largest Rectangle in Histogram"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/largest-rectangle-in-histogram/)**
      
      The ultimate monotonic stack problem, calculating geometric bounds dynamically.
      
      **New Concepts:**
      - Monotonic Increasing Stack
      - Boundary calculation
    parents: [daily_temperatures]

  binary_search:
    title: "Binary Search"
    short_title: "Binary Search"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/binary-search/)**
      
      Foundation of searching sorted spaces.
      
      **New Concepts:**
      - Divide and Conquer
      - Logarithmic time
    parents: []

  search_a_2d_matrix:
    title: "Search a 2D Matrix"
    short_title: "Search a 2D Matrix"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/search-a-2d-matrix/)**
      
      Extends binary search from a line to a grid.
      
      **New Concepts:**
      - Coordinate mapping (1D to 2D)
    parents: [binary_search]

  find_minimum_in_rotated_sorted_array:
    title: "Find Min in Rotated Array"
    short_title: "Find Min in Rotated Array"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/)**
      
      Adapts binary search for spaces that are only partially sorted.
      
      **New Concepts:**
      - Identifying sorted halves
    parents: [binary_search]

  search_in_rotated_sorted_array:
    title: "Search in Rotated Array"
    short_title: "Search in Rotated Array"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/search-in-rotated-sorted-array/)**
      
      Combines coordinate manipulation with partial-sort logic.
      
      **New Concepts:**
      - Target localization in broken sorted spaces
    parents: [search_a_2d_matrix, find_minimum_in_rotated_sorted_array]

  median_of_two_sorted_arrays:
    title: "Median of Two Sorted Arrays"
    short_title: "Median of Two Sorted Arrays"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/median-of-two-sorted-arrays/)**
      
      The hardest binary search concept: searching a partition instead of an element.
      
      **New Concepts:**
      - Binary searching abstract boundaries
    parents: [search_in_rotated_sorted_array]

  reverse_linked_list:
    title: "Reverse Linked List"
    short_title: "Reverse Linked List"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/reverse-linked-list/)**
      
      Foundation of linked structures.
      
      **New Concepts:**
      - Pointers
      - Node manipulation
    parents: []

  merge_two_sorted_lists:
    title: "Merge Two Sorted Lists"
    short_title: "Merge Two Sorted Lists"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/merge-two-sorted-lists/)**
      
      Foundation of list merging.
      
      **New Concepts:**
      - Dummy nodes
      - Splicing lists
    parents: []

  linked_list_cycle:
    title: "Linked List Cycle"
    short_title: "Linked List Cycle"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/linked-list-cycle/)**
      
      Brings the two-pointer concept into linked list spaces.
      
      **New Concepts:**
      - Floyd's Tortoise and Hare
    parents: [valid_palindrome]

  reorder_list:
    title: "Reorder List"
    short_title: "Reorder List"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/reorder-list/)**
      
      A pure test combining reversal, merging, and fast/slow pointers.
      
      **New Concepts:**
      - Finding midpoints
      - Alternating splices
    parents: [reverse_linked_list, merge_two_sorted_lists]

  remove_nth_node_from_end:
    title: "Remove Nth Node"
    short_title: "Remove Nth Node"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)**
      
      Applies a 'gap' to two pointers to find trailing nodes.
      
      **New Concepts:**
      - Delayed pointers
    parents: [reverse_linked_list]

  copy_list_with_random_pointer:
    title: "Copy List with Random Pointer"
    short_title: "Copy List with Random Pointer"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/copy-list-with-random-pointer/)**
      
      Combines linked list traversal with Hash Map mapping.
      
      **New Concepts:**
      - Mapping old nodes to new nodes
    parents: [two_sum]

  add_two_numbers:
    title: "Add Two Numbers"
    short_title: "Add Two Numbers"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/add-two-numbers/)**
      
      Applies arithmetic while traversing nodes.
      
      **New Concepts:**
      - Carry math across nodes
    parents: [reverse_linked_list]

  merge_k_sorted_lists:
    title: "Merge k Sorted Lists"
    short_title: "Merge k Sorted Lists"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/merge-k-sorted-lists/)**
      
      Combines list merging with priority queue sorting for efficiency.
      
      **New Concepts:**
      - Min-Heaps applied to linked nodes
    parents: [merge_two_sorted_lists, top_k_frequent_elements]

  invert_binary_tree:
    title: "Invert Binary Tree"
    short_title: "Invert Binary Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/invert-binary-tree/)**
      
      Foundation of modifying tree structures.
      
      **New Concepts:**
      - Recursion
      - Tree Traversal (DFS)
    parents: []

  maximum_depth_of_binary_tree:
    title: "Max Depth of Binary Tree"
    short_title: "Max Depth of Binary Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/maximum-depth-of-binary-tree/)**
      
      Extends traversal by passing values up the call stack.
      
      **New Concepts:**
      - Bottom-up recursion
      - State returning
    parents: [invert_binary_tree]

  diameter_of_binary_tree:
    title: "Diameter of Binary Tree"
    short_title: "Diameter of Binary Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/diameter-of-binary-tree/)**
      
      Calculates local values while updating a global maximum.
      
      **New Concepts:**
      - Global state updating during DFS
    parents: [maximum_depth_of_binary_tree]

  balanced_binary_tree:
    title: "Balanced Binary Tree"
    short_title: "Balanced Binary Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/balanced-binary-tree/)**
      
      Uses the depth logic to strictly validate tree balance.
      
      **New Concepts:**
      - Early termination
      - Returning multiple states
    parents: [maximum_depth_of_binary_tree]

  same_tree:
    title: "Same Tree"
    short_title: "Same Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/same-tree/)**
      
      Synchronizes DFS across multiple structures.
      
      **New Concepts:**
      - Parallel traversal of two trees
    parents: [invert_binary_tree]

  subtree_of_another_tree:
    title: "Subtree of Another Tree"
    short_title: "Subtree of Another Tree"
    emoji: "🟢"
    content: |
      **[LeetCode](https://leetcode.com/problems/subtree-of-another-tree/)**
      
      Uses 'Same Tree' as a helper function across every node.
      
      **New Concepts:**
      - Nested tree traversal
    parents: [same_tree]

  lowest_common_ancestor_bst:
    title: "LCA of a BST"
    short_title: "LCA of a BST"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)**
      
      Combines Tree traversal with Binary Search logic.
      
      **New Concepts:**
      - Exploiting BST properties
    parents: [invert_binary_tree, binary_search]

  validate_binary_search_tree:
    title: "Validate BST"
    short_title: "Validate BST"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/validate-binary-search-tree/)**
      
      Extends BST properties to enforce strict upper/lower bounds.
      
      **New Concepts:**
      - Boundary tracking (Min/Max limits)
    parents: [lowest_common_ancestor_bst]

  kth_smallest_element_in_bst:
    title: "Kth Smallest Element in BST"
    short_title: "Kth Smallest Element in BST"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/kth-smallest-element-in-a-bst/)**
      
      Uses the fact that In-Order traversal of a BST yields a sorted array.
      
      **New Concepts:**
      - In-order traversal properties
    parents: [validate_binary_search_tree]

  construct_binary_tree:
    title: "Construct Tree from Preorder/Inorder"
    short_title: "Construct Tree from Preorder/Inorder"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/)**
      
      Deconstructs traversal outputs back into a tree structure.
      
      **New Concepts:**
      - Array splitting
      - Array to Tree mapping
    parents: [validate_binary_search_tree]

  binary_tree_maximum_path_sum:
    title: "Binary Tree Max Path Sum"
    short_title: "Binary Tree Max Path Sum"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/binary-tree-maximum-path-sum/)**
      
      The ultimate evolution of 'Diameter', tracking complex path sums.
      
      **New Concepts:**
      - Path splitting
      - Negative value rejection
    parents: [diameter_of_binary_tree]

  serialize_and_deserialize:
    title: "Serialize and Deserialize Tree"
    short_title: "Serialize and Deserialize Tree"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/serialize-and-deserialize-binary-tree/)**
      
      Combines tree construction with string manipulation.
      
      **New Concepts:**
      - String processing
      - Pre-order building
    parents: [construct_binary_tree]

  number_of_islands:
    title: "Number of Islands"
    short_title: "Number of Islands"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/number-of-islands/)**
      
      Applies Tree DFS to a 2D matrix (Graph).
      
      **New Concepts:**
      - Grid boundaries
      - Graph DFS
    parents: [invert_binary_tree]

  clone_graph:
    title: "Clone Graph"
    short_title: "Clone Graph"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/clone-graph/)**
      
      Combines Node mapping (from Linked Lists) with Graph traversal.
      
      **New Concepts:**
      - Adjacency lists
      - State mapping
    parents: [number_of_islands, copy_list_with_random_pointer]

  max_area_of_island:
    title: "Max Area of Island"
    short_title: "Max Area of Island"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/max-area-of-island/)**
      
      Applies 'Max Depth' counting logic to 'Number of Islands'.
      
      **New Concepts:**
      - Area accumulation in graphs
    parents: [number_of_islands]

  pacific_atlantic_water_flow:
    title: "Pacific Atlantic Water Flow"
    short_title: "Pacific Atlantic Water Flow"
    emoji: "🟡"
    content: |
      **[LeetCode](https://leetcode.com/problems/pacific-atlantic-water-flow/)**
      
      Traverses from the ocean boundaries inwards.
      
      **New Concepts:**
      - Reverse traversal
      - Matrix intersections
    parents: [max_area_of_island]

  word_ladder:
    title: "Word Ladder"
    short_title: "Word Ladder"
    emoji: "🔴"
    content: |
      **[LeetCode](https://leetcode.com/problems/word-ladder/)**
      
      Transitions from DFS to BFS for shortest path discovery.
      
      **New Concepts:**
      - Breadth-First Search (BFS)
      - Shortest Path
    parents: [number_of_islands]

`,
  },

  {
    name: "Tech: Programming Family Tree",
    yaml: `meta:
  title: "The Web of Programming Languages"
  description: |
    A wide and deep exploration of how modern programming 
    languages evolved from the earliest machine codes. This 
    graph illustrates the massive branching factor of the 
    software world, showing how different philosophies 
    (imperative, functional, object-oriented) created 
    entirely different lineages of technology.
  start: [assembly]

nodes:
  assembly:
    title: "Assembly & Machine Code"
    short_title: "Assembly"
    emoji: "🔢"
    content: |
      In the beginning, there was the hardware. 
      Programmers wrote in binary or mnemonic 
      Assembly code, tied directly to a specific 
      CPU architecture. 

      It was fast, but it was unreadable and 
      impossible to port between machines.
      
      ![Assembly](https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Table_of_x86_Registers_v2.svg/400px-Table_of_x86_Registers_v2.svg.png)
    parents: []

  fortran:
    title: "FORTRAN (1957)"
    short_title: "FORTRAN"
    emoji: "🧪"
    content: |
      The first high-level language, designed 
      specifically for scientific and 
      engineering calculations. 

      It introduced the concept of the 
      "Compiler," allowing humans to write 
      formulas instead of memory addresses.
    parents: [assembly]

  lisp:
    title: "LISP (1958)"
    short_title: "LISP"
    emoji: "🌿"
    content: |
      While FORTRAN focused on numbers, John 
      McCarthy's LISP focused on symbols and 
      lists. 

      It founded the **Functional Programming** 
      lineage, introducing recursion, garbage 
      collection, and the idea that "code is 
      data."
    parents: [assembly]

  algol:
    title: "ALGOL 60"
    short_title: "ALGOL"
    emoji: "📐"
    content: |
      The "Universal" language that defined 
      the block-structured syntax we still 
      use today (\`begin/end\`, \`if/then/else\`).

      Almost every modern imperative language 
      is a "descendant of ALGOL."
    parents: [fortran]

  c_lang:
    title: "C (1972)"
    short_title: "C"
    emoji: "🏎️"
    content: |
      Developed at Bell Labs to write the 
      UNIX operating system. 

      C combined the power of Assembly with 
      the structure of ALGOL. It became the 
      "portable assembly" of the world.
    parents: [algol]

  smalltalk:
    title: "Smalltalk (1972)"
    short_title: "Smalltalk"
    emoji: "💬"
    content: |
      While C was perfecting the imperative 
      style, Smalltalk was perfecting 
      **Object-Oriented Programming (OOP)**.

      Everything was an object, and objects 
      communicated via messages. It inspired 
      the GUI and modern IDEs.
    parents: [lisp, algol]

  cpp:
    title: "C++ (1985)"
    short_title: "C++"
    emoji: "🏗️"
    content: |
      Bjarne Stroustrup wanted to add 
      Smalltalk-style objects to the 
      efficiency of C.

      The result was a massive, complex 
      language that powered the desktop 
      software revolution of the 90s.
    parents: [c_lang, smalltalk]

  python:
    title: "Python (1991)"
    short_title: "Python"
    emoji: "🐍"
    content: |
      Guido van Rossum designed Python to 
      be readable and "fun." 

      It inherited from C (for its core) 
      and ABC (for its syntax), becoming the 
      dominant language for data science and 
      automation.
    parents: [c_lang]

  java:
    title: "Java (1995)"
    short_title: "Java"
    emoji: "☕"
    content: |
      "Write Once, Run Anywhere." 

      Java simplified C++ by removing 
      manual memory management (pointers) 
      and running on a Virtual Machine (JVM). 
      It conquered the enterprise world.
    parents: [cpp]

  javascript:
    title: "JavaScript (1995)"
    short_title: "JS"
    emoji: "🕸️"
    content: |
      Created in 10 days for the Netscape 
      browser. 

      Despite its name, it has more in 
      common with LISP and Self than Java. 
      It is now the most widely used 
      language in the world.
    parents: [c_lang, lisp]

  haskell:
    title: "Haskell (1990)"
    short_title: "Haskell"
    emoji: "λ"
    content: |
      A purely functional language named 
      after Haskell Curry. 

      It introduced advanced type systems 
      (Monads!) and lazy evaluation, 
      pushing the boundaries of how we 
      reason about programs.
    parents: [lisp]

  rust:
    title: "Rust (2010)"
    short_title: "Rust"
    emoji: "🦀"
    content: |
      The modern successor to C++. 

      It uses a "Borrow Checker" to provide 
      memory safety without a garbage 
      collector, merging functional concepts 
      with low-level performance.
    parents: [cpp, haskell]
`,
  },
  {
    name: "Tech: Smartphone Convergence",
    yaml: `meta:
  title: "The Convergence of the Smartphone"
  description: |
    A classic example of multiple independent technological 
    paths (Telephony, Computing, Media, and Internet) 
    converging to create a single, world-changing device. 
    This graph shows how the iPhone (2007) wasn't just a 
    new phone, but a synthesis of decades of separate 
    innovation in completely different industries.
  start: [telephony_root, computing_root, media_root, internet_root]

nodes:
  telephony_root:
    title: "Mobile Telephony"
    short_title: "Telephony"
    emoji: "📞"
    content: |
      The path of the radio phone. From 
      the massive "brick" phones of the 80s 
      to the sleek Nokia 3310. 

      This lineage focused on voice 
      quality, battery life, and 
      cellular signal handoffs.
      
      ![Nokia 3310](https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nokia_3310_blue_rtl2.jpg/160px-Nokia_3310_blue_rtl2.jpg)
    parents: []

  computing_root:
    title: "Personal Computing"
    short_title: "Computing"
    emoji: "💻"
    content: |
      The shrinking of the computer. From 
      desktops to laptops to PDAs 
      (Personal Digital Assistants) like 
      the Palm Pilot.

      This lineage focused on operating 
      systems, apps, and processors.
    parents: []

  media_root:
    title: "Portable Media"
    short_title: "Media"
    emoji: "🎵"
    content: |
      The evolution of music on the go. 
      From the Sony Walkman to the 
      Discman, and finally the iPod.

      This lineage focused on storage 
      (MP3s) and the user interface for 
      browsing thousands of songs.
    parents: []

  internet_root:
    title: "Wireless Connectivity"
    short_title: "Connectivity"
    emoji: "📡"
    content: |
      The move from wired ethernet to 
      Wireless LAN (WiFi) and mobile data 
      (GPRS/EDGE).

      This lineage focused on networking 
      protocols and "always-on" data.
    parents: []

  pda_phone:
    title: "The Blackberry/Treo"
    short_title: "Early Smart"
    emoji: "⌨️"
    content: |
      Early attempts to merge telephony 
      and computing. Great for email 
      and calendars, but they were clunky 
      and had tiny physical keyboards.
    parents: [telephony_root, computing_root]

  iphone_convergence:
    title: "The iPhone (2007)"
    short_title: "iPhone"
    emoji: "📱"
    content: |
      ### The Great Convergence
      Steve Jobs famously introduced it 
      as "A widescreen iPod with touch 
      controls, a revolutionary mobile 
      phone, and a breakthrough internet 
      communications device."

      It was the first time all four 
      paths—Phones, Computers, Media Players, 
      and the Web—merged into a single, 
      touch-driven device.
      
      ![iPhone 2007](https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/IPhone_2G_PSD_Mockup.png/200px-IPhone_2G_PSD_Mockup.png)
    parents: [pda_phone, media_root, internet_root]
`,
  },
  {
    name: "Science: Stellar Evolution",
    yaml: `meta:
  title: "The Life and Death of Stars"
  description: |
    A graph that begins linearly as all stars form from 
    gas clouds, but then branches wildly based on a 
    single variable: Mass. This illustrates how a 
    shared starting point can lead to vastly different 
    outcomes—from a quiet white dwarf to a reality-warping 
    black hole.
  start: [nebula]

nodes:
  nebula:
    title: "Stellar Nursery"
    short_title: "Nebula"
    emoji: "☁️"
    content: |
      Giant Molecular Clouds (Nebulas) of 
      hydrogen and dust collapse under 
      gravity. 

      This phase is universal. Every star 
      begins as a cold, dark cloud 
      starting to spin and heat up.
      
      ![Nebula](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Eagle_nebula_pillars.jpg/300px-Eagle_nebula_pillars.jpg)
    parents: []

  protostar:
    title: "Protostar"
    short_title: "Protostar"
    emoji: "🌟"
    content: |
      The core temperature reaches 
      millions of degrees. Friction and 
      pressure create a glowing sphere. 

      It's not yet a star, but it's 
      gathering mass and preparing for 
      fusion.
    parents: [nebula]

  main_sequence:
    title: "Main Sequence"
    short_title: "Main Seq"
    emoji: "☀️"
    content: |
      Nuclear fusion begins. Hydrogen 
      fuses into Helium, releasing 
      immense energy. 

      The star is in a state of 
      **Hydrostatic Equilibrium**—gravity 
      pulls in, and radiation pressure 
      pushes out.
      
      ![The Sun](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/300px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg)
    parents: [protostar]

  low_mass_branch:
    title: "Branch: Low Mass Stars"
    short_title: "Low Mass"
    emoji: "🕯️"
    content: |
      Stars like our Sun (< 8 solar masses). 
      They burn their fuel slowly over 
      billions of years. 

      When the hydrogen runs out, the 
      core collapses and the outer layers 
      expand.
    parents: [main_sequence]

  high_mass_branch:
    title: "Branch: High Mass Stars"
    short_title: "High Mass"
    emoji: "🔥"
    content: |
      Stars (> 8 solar masses). They burn 
      furious and fast, exhausting their 
      fuel in just millions of years. 

      They are the "rock stars" of the 
      cosmos—live fast, die young.
    parents: [main_sequence]

  red_giant:
    title: "Red Giant"
    short_title: "Red Giant"
    emoji: "🔴"
    content: |
      The star expands to 100x its 
      original size. It starts fusing 
      Helium into Carbon. 

      Eventually, it sheds its outer 
      layers into space.
    parents: [low_mass_branch]

  white_dwarf:
    title: "White Dwarf"
    short_title: "White Dwarf"
    emoji: "💎"
    content: |
      The tiny, dense, glowing core that 
      remains. No more fusion occurs. 

      It will slowly cool over trillions 
      of years until it becomes a cold 
      Black Dwarf.
    parents: [red_giant]

  supernova:
    title: "Supernova"
    short_title: "Supernova"
    emoji: "💥"
    content: |
      The core collapses so violently 
      that it rebounds in a massive 
      explosion, outshining an entire 
      galaxy. 

      This explosion creates all the 
      heavy elements (Gold, Iron) in 
      the universe.
      
      ![Supernova](https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Crab_Nebula.jpg/300px-Crab_Nebula.jpg)
    parents: [high_mass_branch]

  neutron_star:
    title: "Neutron Star"
    short_title: "Neutron"
    emoji: "🧲"
    content: |
      If the remaining core is between 
      1.4 and 3 solar masses, it 
      becomes a city-sized ball of 
      pure neutrons. 

      One teaspoon of this material 
      would weigh a billion tons.
    parents: [supernova]

  black_hole:
    title: "Black Hole"
    short_title: "Black Hole"
    emoji: "🕳️"
    content: |
      If the core is > 3 solar masses, 
      not even neutron degeneracy 
      can stop the collapse. 

      Gravity becomes so strong that 
      even light cannot escape. Space 
      and time are warped into a 
      singularity.
      
      ![Black Hole](https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Black_hole_-_M87.jpg/300px-Black_hole_-_M87.jpg)
    parents: [supernova]
`,
  },
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
      
      ![SunOS](https://upload.wikimedia.org/wikipedia/en/thumb/8/84/SunOS_logo.svg/300px-SunOS_logo.svg.png)
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
      
      ![Ghost Map](https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Snow-cholera-map-1.jpg/400px-Snow-cholera-map-1.jpg)
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
      
      ![First Flight](https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/First_flight2.jpg/400px-First_flight2.jpg)
    parents: [wing_warping, custom_engine]
`,
  },
];
