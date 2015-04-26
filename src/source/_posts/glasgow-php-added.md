---
title: New User Group Event: Glasgow PHP
date: 
draft: true
use: [events]
---
{% block content %}
<br>
    {% for event in data.events | reverse %}
        {% if event.short == "glasgowphp" %}
            <div class="row appearance" style="font-size:20px; margin-left:-100px">
                <div class="col-md-3 text-right appearance-date">
                    {{ event.date|date('F j, Y') }}
                </div>
                <div class="col-md-9 appearance-details">
                    {% if event.appearance_url %}
                        <a href="{{ event.appearance_url | raw }}">
                    {% endif %}
                    <p class="appearance-details__event">{{ event.event | raw}}
                    {% if event.appearance_url %}
                        </a>
                    {% endif %}
                    <div class="appearance-details__location">{{ event.location |raw }}</div>
                    <p class="appearance-details__title">{{ event.title | raw }}</p>
                </div>
            </div>
        {% endif %}
    {% endfor %}
{% endblock %}