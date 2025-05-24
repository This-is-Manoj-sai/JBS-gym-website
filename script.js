 function showPlan(planType) {
            document.querySelectorAll('.plan-content').forEach(plan => {
                plan.classList.remove('active');
            });
            document.querySelectorAll('.plan-tab').forEach(tab => {
                tab.classList.remove('active');
            });

            document.getElementById(planType + '-plan').classList.add('active');
            document.querySelector('.plan-tab[onclick="showPlan(\'' + planType + '\')"]').classList.add('active');
        }

        function showSchedule(scheduleType) {
            document.querySelectorAll('.schedule-content').forEach(schedule => {
                schedule.classList.remove('active');
            });
            document.querySelectorAll('.schedule-tab').forEach(tab => {
                tab.classList.remove('active');
            });

            document.getElementById(scheduleType + '-schedule').classList.add('active');
            document.querySelector('.schedule-tab[onclick="showSchedule(\'' + scheduleType + '\')"]').classList.add('active');
        }

        function showNutrition(nutritionType) {
            document.querySelectorAll('.nutrition-content').forEach(nutrition => {
                nutrition.classList.remove('active');
            });
            document.querySelectorAll('.nutrition-tab').forEach(tab => {
                tab.classList.remove('active');
            });

            document.getElementById(nutritionType + '-nutrition').classList.add('active');
            document.querySelector('.nutrition-tab[onclick="showNutrition(\'' + nutritionType + '\')"]').classList.add('active');
        }