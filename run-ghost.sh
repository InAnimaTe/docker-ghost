#!/bin/bash

chown ghost. -R /ghost/content

su ghost -c "npm start"
