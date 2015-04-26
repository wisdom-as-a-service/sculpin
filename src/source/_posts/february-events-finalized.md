---
title: February Tour Events Finalized
date: 2015-01-19
use: [events]
---
{% block content %}
The February Tour itinerary has finally come together. We're spending most of the month in the UK, then home through 
Montreal, and finally on to New York to finish up the month!  The final tally? Two Conferences, five User Groups, five countries. Now for March!<br>
    {% for event in data.events | reverse %}
        {% if event.date | date('F') == "February" %}
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