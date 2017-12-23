#!/bin/bash
function jsonval {

	# local json=$1
	# local prop=$2
	echo $2
    local temp=`echo $json | sed 's/\\\\\//\//g' | sed 's/[{}]//g' | awk -v k="text" '{n=split($0,a,","); for (i=1; i<=n; i++) print a[i]}' | sed 's/\"\:\"/\|/g' | sed 's/[\,]/ /g' | sed 's/\"//g' | grep -w $prop`
    echo ${temp##*|}
}

json='{
	"profile_image_url":"tdadada",
	"dsadsad":"shit"
}'
prop="profile_image_url"

echo `jsonval '$json asdasda`

#`curl -s -X GET $picurl -o $1.png`
