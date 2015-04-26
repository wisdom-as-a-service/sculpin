---
title: Winter UK Leg Finalized
type: text
draft: false
date: 2015-01-16 00:01
use:
    - events
---
{% block content %}

We'll be concluding the opening leg of the Tour in the UK with the following events. We had an overwhelming reception to 
the Tour from User Groups in the UK and we're going to try very hard to get back there for another extended leg later 
in the year. For now, here's where you can catch the Tour in the UK:
<br>
    {% for event in data.events | reverse %}
        {% if event.leg == "uk-winter" %}
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