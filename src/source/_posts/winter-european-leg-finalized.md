---
title: Winter European Leg Finalized
type: text
draft: false
date: 2015-01-04 00:01
use:
    - events
---
{% block content %}

That's it! It's all come together. The opening leg of the Tour has been finalized! We had a tremendous reception to 
the Tour from European User Groups and we're going to try very hard to get back there for another extended leg later 
in the year. For now, here's where you can catch the Tour in Europe:
<br>
    {% for event in data.events | reverse %}
        {% if event.leg == "europe-winter" %}
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