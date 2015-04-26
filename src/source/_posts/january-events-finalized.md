---
title: January Tour Events Finalized
date: 2014-12-19
use: [events]
---
{% block content %}
That's it. The January Tour itinerary has finally come together. We're kicking the Tour off on home turf at ShorePHP on the
 12th and then it's on to Europe!  The final tally? One Conference, six User Groups, four countries. On to February!<br>
    {% for event in data.events | reverse %}
        {% if event.date | date('F') == "January" %}
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