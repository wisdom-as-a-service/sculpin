---
title: March Tour Events Finalized
date: 2015-02-11
use: [events]
---
{% block content %}
The March Tour itinerary has been completed. We're staying domestic in March with a final tally of one Conference and 
three User Groups. On to April!<br>
    {% for event in data.events | reverse %}
        {% if event.date | date('F') == "March" %}
            <div class="row appearance" style="font-size:20px; margin-left:-100px">
                <div class="col-md-3 text-right appearance-date">
                        {{ event.date|date('F j, Y') }}
                </div>
                <div class="col-md-9 appearance-details">
                    {% if event.appearance_url %}
                        <a href="{{ event.appearance_url }}">
                    {% endif %}
                    <p class="appearance-details__event">{{ event.event }}
                    {% if event.appearance_url %}
                        </a>
                    {% endif %}  
                    <div class="appearance-details__location">{{ event.location }}</div>
                    <p class="appearance-details__title">{{ event.title|raw }}</p>
                </div>
            </div>
        {% endif %}
    {% endfor %}
{% endblock %}