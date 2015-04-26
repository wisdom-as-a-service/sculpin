---
title: New User Group Event: Frankfurt PHP
date: 2015-01-02
use: [events]
---
{% block content %}
We've added our second event in Germany - Frankfurt PHP! We're also pleased to announce that Davey Shafek will be joining us for 
this one! <br>
    {% for event in data.events | reverse %}
        {% if event.short == "frankfurtphp" %}
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