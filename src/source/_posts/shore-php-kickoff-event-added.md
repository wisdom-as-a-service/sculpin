---
title: New User Group Event: Shore PHP
date: 2014-11-30 00:00
type: text
draft: false
use:
    - events
---
{% block content %}
Of course we're going to kick off the Tour in our backyard!  We're also very excited that <a href="/speakers/ed-finkler">
Ed Finkler</a> has agreed to join us!
<br>
    {% for event in data.events | reverse %}
        {% if event.short == "shorephp" %}
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