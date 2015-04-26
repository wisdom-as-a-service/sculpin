---
title: New User Group Event: Berlin PHP
date: 2015-01-03
use: [events]
---
{% block content %}
The Tour's march through Germany concludes with the third event in three days as we join Berlin PHP. Davey Shafek is joining us at 
this stop, as well, so it promises to be a great event!<br>
    {% for event in data.events | reverse %}
        {% if event.short == "berlinphp" %}
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