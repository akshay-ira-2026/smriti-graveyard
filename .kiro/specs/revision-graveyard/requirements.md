# Requirements
1. WHEN a user buries a topic THEN the system SHALL create an item due today with ease 2.5 and award 5 points.
2. WHEN an item's due date is today or earlier THEN the system SHALL show it as a floating ghost grave.
3. WHEN the user rates recall q (0-5) THEN the system SHALL apply SM-2: ease = max(1.3, ease + 0.1 - (5-q)(0.08 + (5-q)0.02)); q < 3 resets reps and sets gap 1; else gaps 1, 6, then round(gap x ease).
4. WHEN a review happens on a new day THEN the streak SHALL grow by 1 if the last review was yesterday, else reset to 1.
5. The system SHALL plot the 30-night average predicted recall R = e^(-t/S), S = gap x ease / 2.5.
6. The system SHALL persist state in localStorage and work offline.
