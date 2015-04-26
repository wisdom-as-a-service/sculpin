---
title: New Conference Event: OpenWest
date: 2015-02-28 00:01
use: [events]
---
{% block content %}
<p>We are excited to announce that <i>three</i> talks have been selected for <a href="//openwest.com/">OpenWest 
2015</a>!</p>
In might be tight, given that <a href="//phpday.it/">PHP Day</a> in Verona comes quickly on its heels, but we're going to begin reaching 
out to User Groups in the area immediately.
<br>
    {% for event in data.events | reverse %}
        {% if event.short == "openwest" %}
            <div class="row appearance" style="font-size:20px; margin-left:-100px">
                <div class="col-md-3 text-right appearance-date">
                        {{ event.date|date('F j, Y') }}
                </div>
                <div class="col-md-9 appearance-details">
                    {% if event.appearance_url %}<a href="{{ event.appearance_url }}">{% endif %}
                    <p class="appearance-details__event">{{ event.event }}
                    {% if event.appearance_url %}</a>{% endif %}  
                    <div class="appearance-details__location">{{ event.location }}</div>
                    <p class="appearance-details__title">{{ event.title|raw }}</p>
                </div>
            </div>
        {% endif %}
    {% endfor %}
{% endblock %}